import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";

export default function About() {
  return (
    <section className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-10 py-8 px-4 lg:mx-auto lg:max-w-screen-xl lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            {/* hyphen -  */}
            <AiOutlineSmallDash className="text-4xl text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-green-500">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              A Full Stack Developer with 2+ years of experience in designing
              and developing user interfaces, testing, debugging, and training
              staff within modern technologies. Proven ability in optimizing web
              functionalities that improve data retrieval and workflow
              efficiencies. some of the work I accomplished for them included
              creating websites, web applications, brands, and other things.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-green-500">
                Work Experience
              </h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-600"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-green-500">
                    Full Stack Developer at Silicon
                  </h4>
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  I worked as a full stack developer at Silicon, I worked on a
                  many projects and I learned a lot of things, I worked with
                  different technologies and I learned how to use them, I
                  learned how to work in a team and how to communicate with my
                  team members, I learned how to work under pressure and how to
                  deliver the project on time.
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-600"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-green-500">
                    Full Stack Development Intern at Yooltech
                  </h4>
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  I worked as a full stack development intern at Yooltech, I was
                  a part of a team that worked on a project for a client, I
                  learned a lot of things, We worked with different technologies
                  Such as React, Nextjs, Nodejs, Expressjs, MongoDB, and many
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
