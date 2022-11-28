import type { Post } from "lib/types";
import { formatDate } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineCalendar, HiOutlineUser } from "react-icons/hi";
import { MdArrowBackIosNew } from "react-icons/md";
import ReactMarkdown from "react-markdown";
type Props = {
  post: Post;
};

export default function SingleBlog({ post }: Props) {
  const contentToRender = post.content.join(" ");
  console.log(contentToRender);
  return (
    <div className="relative mb-10 w-screen">
      <div className="mx-auto max-w-screen-lg">
        <Link
          href={"/blogs"}
          className="my-10 flex items-center text-green-500"
        >
          <MdArrowBackIosNew className="h-5 w-5" />
          Back to blogs
        </Link>
        <div className="flex flex-col items-center">
          <div className="relative m-2 max-h-fit max-w-fit border-spacing-2 rounded-lg border-2 border-green-500">
            <Image
              src={post.image[0].url}
              className="rounded-lg"
              alt={post.title}
              width={900}
              height={400}
            />
            <div className="absolute bottom-2 left-2">
              <Image
                src={post.avatar}
                alt={post.author}
                width={50}
                className="m-2 rounded-full border-4 border-white"
                height={50}
              />
              <div className="flex flex-row items-center">
                <span className="ml-2 flex flex-row items-center justify-center text-sm font-bold text-gray-400">
                  <HiOutlineCalendar className="mr-1 inline-block text-sm" />
                  {formatDate(post.createdAt)}
                </span>
                <span className="ml-2 h-6 w-1 bg-gray-400" />
                <span className="ml-2 flex flex-row items-center justify-center text-sm font-bold text-gray-400">
                  <HiOutlineUser className="mr-1 inline-block text-sm" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="mb-4">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="mr-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>

          <h1 className="text-center text-7xl font-bold text-gray-800 dark:text-gray-400">
            {post.title}
          </h1>
          <p className="text-center text-lg text-gray-600">{post.excerpt}</p>
          <ReactMarkdown className="my-10 text-gray-400">
            {contentToRender}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
