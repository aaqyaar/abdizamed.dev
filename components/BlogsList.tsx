"use client";

import type { Post } from "lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight, HiSearch } from "react-icons/hi";
import Grid from "./Grid";

type Props = {
  posts: Post[];
  error: any;
};

export default function BlogsList({ posts, error }: Props) {
  const [search, setSearch] = React.useState("");

  const filteredPosts = filteredArray(posts, search);

  if (error) {
    return <div>Failed to load {error}</div>;
  }

  return (
    // search banner and blog lists
    <div className="mb-10 w-screen">
      <div className="mx-4 md:mx-10 lg:mx-auto lg:max-w-screen-xl">
        <div className="flex h-96 w-full flex-col items-center justify-center dark:bg-gray-900">
          <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center">
            <h1 className="text-center text-7xl font-bold text-gray-800 dark:text-gray-400">
              Blogs
            </h1>
            <p className="text-center text-lg text-gray-600">
              I write about things I learn and things I do.
            </p>

            <div className="mt-10 flex w-full flex-col items-center justify-center">
              <div className="flex w-full max-w-4xl flex-col items-center justify-center">
                <div className="flex h-12 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <input
                    className="flex h-full w-full flex-1 rounded-full border-2 px-4 focus:outline-none dark:border-0 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search blog posts"
                  />
                  <button className="flex h-full w-12 flex-none rounded-full bg-gray-100 dark:bg-gray-800">
                    <HiSearch className="m-auto flex h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div>
                  <p className="mt-2 text-sm text-gray-500">
                    Search by title, tags, or keywords
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Grid className="mb-20">
          {filteredPosts.length > 0
            ? filteredPosts.map((post: Post, i) => (
                <div
                  className="mt-10 rounded-lg bg-white shadow-lg shadow-gray-100 dark:bg-gray-800 dark:shadow-gray-900"
                  key={i}
                >
                  <div className="p-4">
                    <Blogs {...post} />
                  </div>
                </div>
              ))
            : null}
        </Grid>

        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-400">
              No results found
            </h1>
            <p className="text-center text-lg text-gray-600">
              Try searching for something else
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const Blogs = ({ title, excerpt, image, slug }: Post) => {
  return (
    <>
      <div id="project-picture">
        <Image
          src={image[0].url}
          alt={title}
          className="h-72 w-full rounded-lg object-cover object-center"
          width={192}
          height={192}
          quality={100}
        />
      </div>
      <div id="content">
        <h3 className="py-2 text-xl font-bold text-gray-900 dark:text-green-500">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400" id="excerpt">
          {excerpt}
        </p>
        <style jsx>
          {`
            #excerpt {
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        </style>

        {/* buttons */}
        <div className="mt-4 flex items-center justify-end">
          <Link
            href={`/blogs/${slug}`}
            className="flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-500 hover:text-green-50"
          >
            Read More <HiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

function filteredArray(arr: Post[], query: string) {
  return arr.filter((el) => {
    return (
      el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.excerpt.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      el.category.filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      ).length > 0 ||
      el.tags.filter(
        (tag) => tag.toLowerCase().indexOf(query.toLowerCase()) !== -1
      ).length > 0
    );
  });
}
