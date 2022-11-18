"use client";

import { type TContact } from "lib/types/contact.types";
import Image from "next/image";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineSmallDash,
} from "react-icons/ai";

export default function Contact() {
  const [values, setValues] = React.useState<TContact>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-10 py-10 lg:mx-auto lg:max-w-screen-xl">
        {/* contact form with name, email, phone, subject, message */}
        <AiOutlineSmallDash className="text-4xl text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-green-600">
          Contact
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-green-600 dark:border-green-400">
              <Image
                src="/images/abdi.png"
                alt="Abdi Aaqyaar"
                className="h-full w-full rounded-full object-cover"
                width={128}
                height={128}
                quality={100}
              />
            </div>
            <h3 className="py-2 text-xl font-bold text-gray-900 dark:text-green-500">
              Abdi Aaqyaar
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
            <div className="mt-4 flex items-center justify-center">
              <a
                href="https://www.github.com/abdi-aaqyaar"
                className="mr-4 flex items-center text-green-600 dark:text-green-400"
              >
                <AiOutlineGithub className="h-7 w-7 pr-2 " />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/abdi-aaqyaar"
                className="flex items-center text-green-600 dark:text-green-400"
              >
                <AiOutlineLinkedin className="h-7 w-7 pr-2 " />
                Linkedin
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="textfield"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="textfield"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="phone"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1234567890"
                  className="textfield"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="subject"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="textfield"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="textfield"
                />
              </div>

              <div className="col-span-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
                  disabled={false}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
