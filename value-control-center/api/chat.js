// Success AI backend for Value Control Center.
// Streams a plain-text answer. Needs OPENAI_API_KEY in the Vercel project's
// environment variables; without it the page falls back to answers composed
// from its own sample data.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST.' });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: 'Live AI is not configured.' });
  const { system = '', messages = [] } = req.body || {};
  const clean = messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-10)
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }));
  if (!clean.length) return res.status(400).json({ error: 'No message to answer.' });
  const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      stream: true,
      temperature: 0.3,
      messages: [{ role: 'system', content: String(system).slice(0, 60000) }, ...clean],
    }),
  });
  if (!upstream.ok || !upstream.body) return res.status(502).json({ error: 'The AI service could not respond.' });
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop();
    for (const line of lines) {
      const data = line.replace(/^data: /, '').trim();
      if (!data || data === '[DONE]') continue;
      try {
        const delta = JSON.parse(data).choices?.[0]?.delta?.content;
        if (delta) res.write(delta);
      } catch {}
    }
  }
  res.end();
}
