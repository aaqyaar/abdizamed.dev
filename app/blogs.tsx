"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,

  autoplay: true,
  autoplaySpeed: 5000,

  // arrows: true,

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

export default function TestBlogs({ posts }: { posts: any }) {
  const slider = React.useRef<any>(null);
  return (
    <div className="relative my-10 mr-4">
      <h2 className="text-3xl font-bold text-green-500">Latest Posts</h2>

      <Slider {...settings} ref={slider}>
        {posts.map((post: any) => (
          <div className="p-4" key={post.id}>
            <div className="rounded-lg bg-white p-4 shadow-lg shadow-gray-100 dark:bg-gray-800 dark:shadow-gray-900">
              <div id="project-picture">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-72 w-full rounded-lg object-cover object-center"
                  width={192}
                  height={192}
                  quality={100}
                />
              </div>
              <div id="content">
                <h3 className="py-2 text-xl font-bold text-gray-900 dark:text-green-500">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400" id="limit-text">
                  {post.excerpt}
                </p>
                <style jsx>{`
                  #limit-text {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  }
                `}</style>

                <button className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white">
                  <a href={post.link}>Read More</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
