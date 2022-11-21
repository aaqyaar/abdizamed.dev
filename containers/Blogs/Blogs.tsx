import Link from "next/link";
import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

export default function Blogs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-10 py-8 lg:mx-auto lg:max-w-screen-xl  lg:py-16">
        <div className=" mb-8 lg:mb-10">
          <AiOutlineSmallDash className="text-4xl text-green-600" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-green-500 lg:text-3xl">
            Blogs
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-lg border border-gray-50 p-6 shadow-md shadow-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900">
            <div className="mb-5 flex items-center justify-between text-gray-500">
              <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200 dark:text-green-800">
                Tutorial
              </span>
              <span className="text-sm">14 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">How to quickly deploy a static website</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers influence both web designers and
              developers.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  className="h-7 w-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium dark:text-white">Jese Leos</span>
              </div>
              <Link
                href="/blogs/[slug]"
                className="inline-flex items-center font-medium text-green-600 hover:underline dark:text-green-500"
              >
                Read more
                <HiArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
