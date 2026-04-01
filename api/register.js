// Vercel Serverless Function — collects player registrations
// Stores in Vercel KV or logs to Vercel function logs (visible in dashboard)
// For now: logs the data (visible in Vercel > Functions > Logs)
// and returns success. Upgrade to database later if needed.

const registrations = [];

export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  // Basic email validation
  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // Log to Vercel function logs (visible in Vercel Dashboard > Functions > Logs)
  console.log(JSON.stringify({
    event: 'player_registration',
    name: name.substring(0, 100), // Sanitize length
    email: email.substring(0, 200),
    timestamp: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || 'unknown'
  }));

  return res.status(200).json({ success: true });
}
