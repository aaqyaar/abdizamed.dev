import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="w-[100vw] snap-start">
      <div
        id="hero"
        className="grid justify-items-center place-items-center place-content-center py-8 lg:mx-auto lg:max-w-screen-xl lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 2xl:py-20"
      >
        <div
          id="hero-content"
          className="col-span-12 lg:col-span-7 lg:mr-auto place-self-center px-2"
          // px-52
        >
          <h1 className="text-center md:text-start text-4xl font-bold text-gray-800 dark:text-green-600 md:text-5xl">
            <span className="text-green-600">Hi, {"I'm"}</span> Abdi Zamed <span className="text-green-600">Mohamed</span>
          </h1>
          {/* <h2 className="my-4 text-2xl font-semibold text-gray-600 dark:text-green-300/50">
            {"I'm"} a software engineer, I build web applications and mobile
            apps
          </h2> */}
          <p className="my-4 text-lg mr-2 text-gray-400">
            A Full Stack Developer with 2+ years of experience in designing and
            developing user interfaces, testing, debugging, and training staff
            within modern technologies. Proven ability in optimizing web
            functionalities that improve data retrieval and workflow
            efficiencies. some of the work I accomplished for them included
            creating websites, web applications, brands, and other things.
          </p>

          <div className="mt-4 flex gap-4 lg:justify-start justify-center">
            <button className="rounded-md bg-green-600 hover:bg-green-700 transition px-4 py-2 text-green-100">
              Get In Touch
            </button>
            <Link href={"/resume.pdf"}>
              <button className="rounded-md px-4 py-2 hover:bg-green-700 text-gray-900 dark:hover:text-gray-800 outline outline-green-600 dark:text-green-600">
                My Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 mt-10  lg:mt-0">
          <div className="md:h-96 w-80 h-80 md:w-96 overflow-hidden rounded-full  border-2 border-green-600 bg-gray-50 shadow-lg shadow-green-50 dark:shadow-gray-800 dark:border-gray-700 dark:bg-gray-800">
            <Image
              src="/images/hero-img2.png"
              alt="Abdi Zamed Mohamed"
              width={600}
              height={600}
              layout="responsive"
              style={{
                filter: "grayscale(50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
