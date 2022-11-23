import { email_template } from "lib/documents/emailTemplate";
import { sendEmail } from "lib/documents/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   allow only post request
  if (req.method === "POST") {
    //   get the data from the request
    const { name, email, message, subject, phone } = req.body;

    //   validate the data
    if (!name || !email || !message || !subject || !phone) {
      return res.status(422).json({ message: "All fields are required" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    //   send the data to the server
    const result = await sendEmail({
      from: email,
      subject: `A Message from Your website - ${process.env.NEXT_PUBLIC_API}`,
      text: email_template(name, email, subject, message, phone),
    });
    return res.status(200).json({ result });
  }

  res.setHeader("Allow", "POST");
  return res.status(405).end(`Method ${req.method} not allowed`);
};
