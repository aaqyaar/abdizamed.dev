import nodemailer from "nodemailer";

export const sendEmail = (options: any) => {
  const smtpTransparent = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    service: "gmail",
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_KEY,
    },
  } as any);

  const mailOptions = {
    from: options.from,
    to: `"To " <${process.env.SMTP_USER}>`,
    subject: options.subject,
    html: options.text,
  };

  return smtpTransparent.sendMail(mailOptions);
};
