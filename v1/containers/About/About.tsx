import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { about, workExpereince } from "lib/data";
import type { IWorkExperience } from "lib/types";
import { HiLocationMarker } from "react-icons/hi";

const WorkExperience = ({
  position,
  company,
  description,
  startDate,
  endDate,
}: IWorkExperience) => {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <div className="mr-2 h-2 w-2 rounded-full bg-green-600"></div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-green-500">
          {position} at {company}
        </h4>
      </div>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>

      {/* startDATE -ENDDATE */}
      <div className="mt-2 flex items-center">
        <AiOutlineSmallDash className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <p className="ml-2 text-gray-500 dark:text-gray-400">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-4 py-8 md:mx-10 lg:mx-auto lg:max-w-screen-xl lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            {/* hyphen -  */}
            <AiOutlineSmallDash className="text-4xl text-green-600" />
            <h2 className="text-3xl font-bold text-green-500">About Me</h2>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {about.excerpt}
            </p>

            {/* location  */}
            <div className="mt-4 flex items-center">
              <HiLocationMarker className="h-6 w-6 pr-2 text-green-600" />
              <p className="text-gray-500 dark:text-gray-400">
                {about.city + ", " + about.state}
              </p>
            </div>
          </div>
          {/* work experience */}
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-10">
              {workExpereince.length > 0 ? (
                <>
                  <h3 className="text-xl font-bold text-green-500">
                    Work Experience
                  </h3>
                  {workExpereince.map((work: IWorkExperience, i) => (
                    <WorkExperience
                      key={i}
                      {...work} // spread operator
                    />
                  ))}
                </>
              ) : (
                <div className="flex h-[30vh] items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-green-500">
                    Oops not found {"their's"} problem in the app
                  </h3>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
