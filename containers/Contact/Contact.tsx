"use client";

import Image from "next/image";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineSmallDash,
} from "react-icons/ai";
import type { TContact } from "lib/types";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleSubmit = async (values: TContact) => {
    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await res.json();
    if (!res.ok) {
      toast.error("Something went wrong!");
    }
    toast.success("Message sent successfully!");
  };

  return (
    <>
      <div className="w-screen bg-white dark:bg-gray-900">
        <div className="mx-4 py-10 md:mx-10 lg:mx-auto lg:max-w-screen-xl">
          {/* contact form with name, email, phone, subject, message */}
          <AiOutlineSmallDash className="text-4xl text-green-600" />
          <h2 className="text-3xl font-bold text-green-500">Contact</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-green-600 dark:border-green-400">
                <Image
                  src="/images/hero-img2.png"
                  alt="Abdi Aaqyaar"
                  className="h-full w-full rounded-full object-cover object-top"
                  width={128}
                  height={128}
                  style={{
                    filter: "grayscale(40%)",
                  }}
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
            {/* contact form components */}
            <>
              <ContactForm onSubmit={handleSubmit} />
            </>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
