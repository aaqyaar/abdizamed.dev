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
  slidesToScroll: 3,
  initialSlide: 0,

  autoplay: true,
  autoplaySpeed: 5000,

  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

export default function Projects() {
  return (
    <section className="w-screen bg-white dark:bg-gray-900">
      <div className="mx-4 py-10 md:mx-10 lg:mx-auto lg:max-w-screen-xl">
        <AiOutlineSmallDash className="text-4xl text-green-600" />

        <h2 className="text-3xl font-bold text-green-500">Projects</h2>

        <Slider {...settings}>
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
