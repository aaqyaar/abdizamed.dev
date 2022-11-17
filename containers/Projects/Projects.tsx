import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";

import Project from "./Project";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "An E-commerce Application built with Nextjs, React, Redux, Tailwindcss, and Firebase.",
    image: "/images/abdi.png",
    github: "https://www.github.com/abdi-aaqyaar/ecommerce",
    live: "https://ecommerce-aaqyaar.vercel.app/",
    technologies: ["React JS", "Next JS", "Redux", "Tailwind CSS", "Firebase"],
  },

  {
    id: 2,
    title: "E-learning Application",
    description:
      "An E-learning Application built with Nextjs, React, Redux, Tailwindcss, and Firebase.",
    image: "/images/abdi.png",
    github: "https://www.github.com/abdi-aaqyaar/elearning",
    live: "https://elearning-aaqyaar.vercel.app/",
    technologies: ["React JS", "Next JS", "Redux", "Tailwind CSS", "Firebase"],
  },

  {
    id: 1,
    title: "E-commerce Application",
    description:
      "An E-commerce Application built with Nextjs, React, Redux, Tailwindcss, and Firebase.",
    image: "/images/abdi.png",
    github: "https://www.github.com/abdi-aaqyaar/ecommerce",
    live: "https://ecommerce-aaqyaar.vercel.app/",
    technologies: ["React JS", "Next JS", "Redux", "Tailwind CSS", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-[1240px] py-10">
        <AiOutlineSmallDash className="text-4xl text-green-600" />

        <h2 className="text-3xl font-bold text-gray-900 dark:text-green-600">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              className="rounded-lg bg-white shadow-lg dark:bg-gray-800"
              key={project.id}
            >
              <div className="p-4">
                <Project key={project.id} {...project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
