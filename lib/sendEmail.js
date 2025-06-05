const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hafidhuddien3@stem.or.id",
        pass: "tusuxcadazrtyuts", // Use the App Password, not your regular Gmail password
      },
    });

    const mailOptions = {
      from: "Berbagi Apps",
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    return `Email sent: ${info.response}`;
  } catch (error) {
    console.error(error);
    return "Failed to send email: " + error.message;
  }
};

module.exports = sendEmail;
