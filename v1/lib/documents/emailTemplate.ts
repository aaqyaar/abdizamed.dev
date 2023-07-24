import type { TContact } from "lib/types";

export const email_template = ({
  name,
  email,
  message,
  subject,
  phone,
}: TContact) => {
  const defaultYear = new Date().getFullYear();
  return `
    <body style="background: #f3f4f6; padding:0 5px;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px 0; font-family:Trebuchet MS;">
    <div style="text-align: center; margin-bottom: 20px;">
     <h1 style="color: #000; text-transform: uppercase; font-size: 30px;">You have new message from your website</h1>
    </div>
    <div style="padding: 10px; border-radius:5px; background:#fff; -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);">
        <h2 style="text-align: center; text-transform: uppercase; color: teal;">New message</h2>
        <p style="font-size:1rem;"><strong>Name: </strong> ${name}</p>
        <p style="font-size:1rem;"><strong>Email: </strong> ${email}</p>
        <p style="font-size:1rem;"><strong>Phone: </strong> ${phone}</p>
        <p style="font-size:1rem;"><strong>Subject: </strong> ${subject}</p>
        <p style="font-size:1rem;"><strong>Message: </strong> ${message}</p>
    </div>
  </div>

    <footer style="text-align: center; padding: 5px 0; color: #000; font-size: 1rem;">
    <h2>Abdi Zamed Mohamed</h2>
    <p>© ${defaultYear} All rights reserved</p>
    </footer>
    </body>
    `;
};
