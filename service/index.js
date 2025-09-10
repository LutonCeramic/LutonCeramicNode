require('dotenv').config(); // for local dev only
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// In production set a specific origin, here allow your frontend domain only
const ALLOWED_ORIGIN = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

// Basic validation helper (improve as needed)
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

app.post('/send-email', async (req, res) => {
  const { name = '', email = '', phone = '', city = '', message = '' } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'name, email and message are required' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'invalid email' });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.TO_EMAIL) {
    return res.status(500).json({ success: false, message: 'Missing email configuration' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.TO_EMAIL || 'lutonceramic@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry Received!!</h2>
        <p><b>Name:</b> ${name }</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || ''}</p>
        <p><b>City:</b> ${city || ''}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
