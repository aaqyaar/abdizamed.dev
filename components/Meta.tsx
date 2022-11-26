"use client";

import { useRouter } from "next/router";
import React from "react";

type TMeta = {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
  url?: string;
  keywords?: string;
};

export default function Meta({
  title,
  description,
  author,
  image,
  url,
  keywords,
}: TMeta) {
  const router = useRouter();

  const meta: TMeta = {
    title: title || "Full Stack Developer | Abdi Zamed Mohamed",
    description:
      description ||
      "A Full Stack Developer with years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web & mobile functionalities that improve data retrieval and workflow efficiencies.",
    author: author || "Abdi Zamed Mohamed",
    image: image || "/images/abdizamed.svg",
    url:
      router?.pathname === undefined
        ? url || "https://abdizamed.com"
        : url || "https://abdizamed.com" + router?.pathname,
    keywords:
      keywords ||
      "Abdi Zamed Mohamed, Full Stack Developer, React Website, Portfolio, Somali Developer, Somali Programmer, Software Developer, abdizamed, abdi-aaqyaar, aaqyaar, github.com/abdi-aaqyaar, https://abdizamed.com, https://github.com/abdi-aaqyaar",
  };
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={meta.url} />

      <meta name="description" content={meta.description} />
      <meta name="author" content={meta.author} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="title" content={meta.title} />
      <meta name="image" content={meta.image} />
      <meta name="publisher" content={meta.author} />
      <meta name="url" content={meta.url} />
      <meta name="robots" content="index, follow" />

      {/* Facebook Meta Tags */}
      <meta name="og:type" content="website" />
      <meta name="og:url" content={meta.url} />
      <meta name="og:title" content={meta.title} />
      <meta name="og:description" content={meta.description} />
      <meta name="og:image" content={meta.image} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  );
}
