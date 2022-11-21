import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="w-screen snap-start">
      <div
        id="hero"
        className="mx-10 grid justify-items-center py-8 px-4  lg:mx-auto lg:max-w-screen-xl lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 2xl:py-20"
      >
        {/* flex  h-[70vh] w-full flex-wrap items-center justify-center md:flex-nowrap */}
        <div
          id="hero-content"
          className="col-span-7 mr-auto place-self-center"
          // px-52
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-green-600 md:text-5xl">
            Hi, {"I'm"} Abdi Zamed Mohamed
          </h1>
          <h2 className="my-4 text-2xl font-semibold text-gray-600 dark:text-green-300/50">
            {"I'm"} a software engineer, I build web applications and mobile
            apps
          </h2>
          <p className="my-2 text-lg text-gray-400">
            A Full Stack Developer with 2+ years of experience in designing and
            developing user interfaces, testing, debugging, and training staff
            within modern technologies. Proven ability in optimizing web
            functionalities that improve data retrieval and workflow
            efficiencies. some of the work I accomplished for them included
            creating websites, web applications, brands, and other things.
          </p>

          <div className="mt-4 flex gap-4">
            <button className="rounded-md bg-green-600 px-4 py-2 text-green-100">
              Get In Touch
            </button>
            <Link href={"/resume.pdf"}>
              <button className="rounded-md px-4 py-2 text-gray-900 outline outline-green-600 dark:text-green-600">
                My Resume
              </button>
            </Link>
          </div>
        </div>

        <div
          id="hero-media"
          className=" relative hidden h-[27rem] w-[27rem] rounded-full border-4 dark:border-green-500  lg:col-span-5 lg:mt-0 lg:flex"
        >
          <Image
            src="/images/abdi.png"
            alt="Abdi Zamed Mohamed Adam"
            className="rounded-full"
            style={{
              filter: "brightness(0.9)",
              objectFit: "cover",
              objectPosition: "top",
            }}
            fill
            // h-[27rem]  w-[27rem]
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
