import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "lib/types";

export default function Project({
  title,
  description,
  image,
  github,
  live,
  technologies,
}: Project) {
  return (
    <>
      <div id="project-picture">
        <Image
          src={image}
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
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        {/* tech stacks */}
        <div className="mt-4 grid grid-cols-3">
          {technologies.map((technology, i) => (
            <div className="mr-4 flex items-center" key={i}>
              <div className="h-2 w-2 rounded-full bg-green-600"></div>
              <p className="ml-2 text-gray-600 dark:text-gray-400">
                {technology}
              </p>
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-4 flex items-center justify-center">
          <Link
            href={live}
            className="mr-4 flex items-center text-green-600 dark:text-green-400"
          >
            <TbWorld className="h-7 w-7 pr-2 " />
            Live
          </Link>

          <Link
            href={github}
            className="mr-4 flex items-center text-green-600 dark:text-green-400"
          >
            <FaGithub className="h-6 w-6 pr-2" />
            Github
          </Link>
        </div>
      </div>
    </>
  );
}
