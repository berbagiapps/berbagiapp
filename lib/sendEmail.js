const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const email = "hafidhuddien@stem.or.id";
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: "tusuxcadazrtyuts", // Use the App Password, not your regular Gmail password
      },
    });

    const mailOptions = {
      from: `"Berbagi Apps" <${email}>`, // sender address
      to,
      subject,
      text,
      //replyTo: "support@berbagi.com", // optional
    };

    const info = await transporter.sendMail(mailOptions);
    return `Email sent: success`;
  } catch (error) {
    console.error(error);
    return "Failed to send email: " + error.message;
  }
};

module.exports = {
  sendEmail,
};
