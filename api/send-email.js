export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN || 'baylabtech.com';
  const recipient = process.env.MAILGUN_RECIPIENT_EMAIL || 'mahomagh@gmail.com';
  const fromEmail = process.env.MAILGUN_FROM_EMAIL || `BayLabTech <postmaster@${domain}>`;
  const region = (process.env.MAILGUN_REGION || 'us').toLowerCase();

  if (!apiKey || apiKey === 'your_mailgun_private_api_key_here') {
    console.error('Mailgun API key is not configured.');
    return res.status(500).json({
      error: 'Mailgun API key is not configured. Please set MAILGUN_API_KEY in your environment variables.',
    });
  }

  const { type, name, email, message, serviceCategory, description, fileUrls } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  // Construct Email Subject & HTML based on form type
  let subject = '';
  let textContent = '';
  let htmlContent = '';
  const now = new Date().toLocaleString('en-US', { timeZoneName: 'short' });

  if (type === 'quote') {
    const category = serviceCategory || 'General Inquiry';
    subject = `[New Quote Request] ${category} - ${name}`;

    const filesList = Array.isArray(fileUrls) && fileUrls.length > 0
      ? fileUrls.map((url, i) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">Attachment ${i + 1}</a> (${url})</li>`).join('')
      : '<li>No files attached</li>';

    textContent = `New Quote Request Received:
------------------------------------
Type: Quote Request
Service: ${category}
Date: ${now}

Client Details:
Name: ${name}
Email: ${email}

Project Description:
${description || 'N/A'}

Attached Files:
${Array.isArray(fileUrls) && fileUrls.length > 0 ? fileUrls.join('\n') : 'None'}
`;

    htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #4f46e5; color: #ffffff; padding: 24px; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 24px; }
    .section { margin-bottom: 20px; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 6px; }
    .data-box { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 15px; }
    .data-row { display: flex; margin-bottom: 8px; }
    .data-label { width: 120px; font-weight: 600; color: #475569; }
    .data-value { flex: 1; color: #0f172a; }
    .files-list { margin: 8px 0 0 0; padding-left: 20px; }
    .files-list li { margin-bottom: 6px; }
    .files-list a { color: #4f46e5; font-weight: 600; text-decoration: none; }
    .files-list a:hover { text-decoration: underline; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Submitted via BayLabTech Website on ${now}</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Client Information</div>
        <div class="data-box">
          <div class="data-row"><span class="data-label">Name:</span><span class="data-value"><strong>${name}</strong></span></div>
          <div class="data-row"><span class="data-label">Email:</span><span class="data-value"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></span></div>
          <div class="data-row"><span class="data-label">Service:</span><span class="data-value"><strong>${category}</strong></span></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Project Description</div>
        <div class="data-box" style="white-space: pre-wrap; line-height: 1.6;">${description || 'No description provided.'}</div>
      </div>

      <div class="section">
        <div class="section-title">Attached Files (${Array.isArray(fileUrls) ? fileUrls.length : 0})</div>
        <div class="data-box">
          <ul class="files-list">
            ${filesList}
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      BayLabTech Automated Quote Notification &bull; Reply to this email or contact ${email} directly.
    </div>
  </div>
</body>
</html>
`;
  } else {
    // Contact form submission
    subject = `[Website Contact Inquiry] from ${name}`;

    textContent = `New Contact Form Inquiry:
------------------------------------
Date: ${now}
Name: ${name}
Email: ${email}

Message:
${message || 'No message provided.'}
`;

    htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #4f46e5; color: #ffffff; padding: 24px; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 24px; }
    .section { margin-bottom: 20px; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 6px; }
    .data-box { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 15px; }
    .data-row { display: flex; margin-bottom: 8px; }
    .data-label { width: 100px; font-weight: 600; color: #475569; }
    .data-value { flex: 1; color: #0f172a; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Inquiry</h1>
      <p>Submitted via BayLabTech Contact Form on ${now}</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Sender Information</div>
        <div class="data-box">
          <div class="data-row"><span class="data-label">Name:</span><span class="data-value"><strong>${name}</strong></span></div>
          <div class="data-row"><span class="data-label">Email:</span><span class="data-value"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></span></div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Message</div>
        <div class="data-box" style="white-space: pre-wrap; line-height: 1.6;">${message || 'No message provided.'}</div>
      </div>
    </div>
    <div class="footer">
      BayLabTech Contact Form &bull; You can reply directly to this message.
    </div>
  </div>
</body>
</html>
`;
  }

  // Base URL for Mailgun API
  const host = region === 'eu' ? 'api.eu.mailgun.net' : 'api.mailgun.net';
  const mailgunUrl = `https://${host}/v3/${domain}/messages`;

  const params = new URLSearchParams();
  params.append('from', fromEmail);
  params.append('to', recipient);
  params.append('subject', subject);
  params.append('text', textContent);
  params.append('html', htmlContent);
  params.append('h:Reply-To', email);

  try {
    const authHeader = `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`;
    const response = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Mailgun API Error:', data);
      return res.status(response.status).json({
        error: data.message || 'Failed to send email via Mailgun.',
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      mailgunId: data.id,
    });
  } catch (err) {
    console.error('Server error sending email:', err);
    return res.status(500).json({ error: 'Internal server error sending email.' });
  }
}
