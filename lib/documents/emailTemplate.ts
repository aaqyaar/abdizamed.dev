export const email_template = (
  name: string,
  email: string,
  message: string,
  subject: string,
  phone: string
) => {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px 0;">
        <div style="text-align: center; margin-bottom: 20px;">
         <h1 style="color: #000; text-transform: uppercase; font-size: 30px;">You have new message from your website</h1>
        </div>
        <div style="border: 1px solid #ddd; padding: 20px;">
            <h2 style="text-align: center; text-transform: uppercase; color: teal;">New message</h2>
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Subject: </strong> ${subject}</p>
            <p><strong>Message: </strong> ${message}</p>
        </div>
    </div>

    `;
};
