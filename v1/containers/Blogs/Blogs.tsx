import { formatDate } from "lib/utils";
import Link from "next/link";
import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import type { Post, Posts } from "lib/types";
import Image from "next/image";

type PropsType = {
  data: {
    posts: Posts;
  };
  error: unknown;
};

export default function Blogs({ data, error }: PropsType) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-4 py-10 md:mx-10 lg:mx-auto lg:max-w-screen-xl lg:py-16">
        <div className="mb-8 lg:mb-10">
          <AiOutlineSmallDash className="text-4xl text-green-600" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-green-500 lg:text-3xl">
            Blogs
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {Array.isArray(data) && data?.length > 0 && !error ? (
            data?.map((blog: Post, i) => (
              <article
                key={i}
                className="rounded-lg border border-gray-50 p-6 shadow-md shadow-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-900"
              >
                <div className="mb-5 flex items-center justify-between text-gray-500">
                  <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200 dark:text-green-800">
                    {blog.category}
                  </span>
                  <span className="text-sm">{formatDate(blog.createdAt)}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{blog.title}</a>
                </h2>
                <p
                  id="limit"
                  className="mb-5 font-light text-gray-500 dark:text-gray-400"
                >
                  {blog.excerpt}
                </p>
                <style jsx>{`
                  #limit {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                `}</style>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      width={35}
                      height={35}
                      src={blog.avatar}
                      className="rounded-full"
                      alt={blog.author}
                    />
                    <span className="font-medium dark:text-white">
                      {blog.author}
                    </span>
                  </div>
                  <Link
                    href={`/blogs/${encodeURIComponent(blog.slug)}`}
                    className="inline-flex items-center font-medium text-green-600 hover:underline dark:text-green-500"
                  >
                    Read more
                    <HiArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-gray-500 dark:text-gray-400">
              No [Posts] found
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
