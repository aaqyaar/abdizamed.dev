import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { projects } from "lib/data";
import Project from "./Project";
import type { Project as ProjectType } from "lib/types";

export default function Projects() {
  return (
    <section className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-4 py-10 lg:mx-auto lg:max-w-screen-xl">
        <AiOutlineSmallDash className="text-4xl text-green-600" />

        <h2 className="text-3xl font-bold text-green-500">
          Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: ProjectType) => (
            <div
              className="rounded-lg bg-white shadow-lg shadow-gray-100 dark:bg-gray-800 dark:shadow-gray-900"
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
