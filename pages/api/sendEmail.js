import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, from, subject, text, html } = req.body;

    // Validate required fields
    if (!to) {
      return res.status(400).json({ error: 'Recipient email (to) is required' });
    }

    // Create a transporter object using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'support@sharplogician.com',
        pass: 'dbzb arjb wuer aleq',
      },
    });

    // Define email options
    const mailOptions = {
      from: from || '"ATG Pharma" <support@sharplogician.com>',
      to,
      subject: subject || 'New Build Submission',
      text: text || 'This is a build submission email.',
      html: html || '<p>This is a build submission email.</p>',
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}