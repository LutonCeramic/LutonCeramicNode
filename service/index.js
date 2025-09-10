const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const { EMAIL_SERVICE_ENDPOINT, EMAIL_SERVICE_API_KEY, PORT } = process.env;

// Endpoint to handle contact form
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_SERVICE_ENDPOINT,
        pass: EMAIL_SERVICE_API_KEY ,
      },
    });

    await transporter.sendMail({
  from: `"${name} <${email}>`,
  replyTo: email, // so replies still go to the visitor
  to: "lutonceramic@gmail.com",
  subject: `New Inquiry from ${name}`,
  html: `
    <h2>New Inquiry Received!!</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>City:</b> ${city}</p>
    <p><b>Message:</b><br/>${message}</p>
  `,
});

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT || 5000}...`);
});