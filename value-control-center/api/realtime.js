// Live voice for Success AI. Mints a short-lived OpenAI Realtime key so the
// browser can open a WebRTC voice session directly with OpenAI. The project's
// OPENAI_API_KEY never leaves the server. Optional: OPENAI_REALTIME_MODEL,
// OPENAI_REALTIME_VOICE.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST.' });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: 'Live voice is not configured.' });
  let sameSite = true;
  try { if (req.headers.origin) sameSite = new URL(req.headers.origin).host === req.headers.host; } catch { sameSite = false; }
  if (!sameSite) return res.status(403).json({ error: 'Cross-site requests are not allowed.' });
  const { instructions = '' } = req.body || {};
  const model = process.env.OPENAI_REALTIME_MODEL || 'gpt-realtime';
  const upstream = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      expires_after: { anchor: 'created_at', seconds: 120 },
      session: {
        type: 'realtime',
        model,
        instructions: String(instructions).slice(0, 60000),
        audio: {
          input: { transcription: { model: 'gpt-4o-mini-transcribe' }, turn_detection: { type: 'server_vad' } },
          output: { voice: process.env.OPENAI_REALTIME_VOICE || 'marin' },
        },
      },
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok || !data.value) {
    return res.status(502).json({ error: 'The voice service could not start a session.', detail: data.error?.message });
  }
  res.setHeader('Cache-Control', 'no-store');
  return res.json({ key: data.value, model });
}
