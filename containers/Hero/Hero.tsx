import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="w-screen snap-start">
      <div
        id="hero"
        className="mx-4 grid place-content-center place-items-center justify-items-center py-8 lg:mx-auto lg:max-w-screen-xl lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 2xl:py-20"
      >
        <div
          id="hero-content"
          className="col-span-12 mx-2 place-content-center justify-items-center lg:col-span-7 lg:mr-auto"
          // px-52
        >
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-green-600 md:text-start md:text-5xl">
            Hi, {"I'm"}{" "}
            <span className="text-green-500"> Abdi Zamed Mohamed</span>
            {/* <span className="text-green-500">Mohamed</span> */}
          </h1>

          <p className="my-4 mr-2 text-lg text-gray-400">
            A Full Stack Developer with 2+ years of experience in designing and
            developing user interfaces, testing, debugging, and training staff
            within modern technologies. Proven ability in optimizing web
            functionalities that improve data retrieval and workflow
            efficiencies. some of the work I accomplished for them included
            creating websites, web applications, brands, and other things.
          </p>

          <div className="mt-4 flex justify-center gap-4 lg:justify-start">
            <button className="rounded-md bg-green-500 px-4 py-2 text-green-100 transition delay-150 duration-300 ease-in-out hover:bg-green-600">
              Get In Touch
            </button>
            <Link href={"/cv-resume.pdf"}>
              <button className="rounded-md border border-green-500 px-4 py-2 text-gray-900 transition delay-150 duration-300 ease-in-out hover:bg-green-600 hover:text-gray-100 dark:text-green-600 dark:hover:text-gray-50">
                My Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 mt-10 lg:col-span-5  lg:mt-0">
          <div className="h-80 w-80 overflow-hidden rounded-full border-2 border-green-500  bg-gray-50 shadow-lg shadow-green-50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-800 md:h-96 md:w-96">
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
