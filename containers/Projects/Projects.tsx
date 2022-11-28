"use client";

import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { projects } from "lib/data";
import Project from "./Project";
import type { Project as ProjectType } from "lib/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,

  autoplay: true,
  autoplaySpeed: 5000,

  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const renderArrows = (slider: {
  current: {
    slickNext: () => void;
    slickPrev: () => void;
  };
}) => {
  return (
    <div className="slick-arrow">
      {/* next button */}
      <div className="flex justify-end">
        <button
          className="absolute top-1/2 right-4 z-10 -translate-y-1/4 transform rounded-full text-green-500 dark:bg-green-600 dark:text-green-50 lg:right-24"
          // responsive button
          // className="absolute top-1/2 right-4 z-10 -translate-y-1/4 transform rounded-full text-green-500 dark:bg-green-600 dark:text-green-50"
          onClick={() => slider.current.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* prev button */}
      <div className="flex justify-start">
        <button
          className="absolute left-4 top-1/2 z-10 -translate-y-1/4 transform rounded-full text-green-500 dark:bg-green-600 dark:text-green-50 lg:left-24"
          onClick={() => slider.current.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  const slider = React.useRef<any>(null);
  return (
    <section className="relative w-screen bg-white dark:bg-gray-900">
      <div className="mx-4 py-10 md:mx-10 lg:mx-auto lg:max-w-screen-xl">
        <AiOutlineSmallDash className="text-4xl text-green-600" />

        <h2 className="text-3xl font-bold text-green-500">Projects</h2>
        <>{renderArrows(slider)}</>
        <Slider {...settings} ref={slider}>
          {projects.map((project: ProjectType, i) => (
            <div
              className="mt-10 rounded-lg bg-white shadow-lg shadow-gray-100 dark:bg-gray-800 dark:shadow-gray-900"
              key={i}
            >
              <div className="p-4">
                <Project {...project} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
