import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-2xl text-gray-400">Page not found</p>

      <p className="py-4  text-gray-400">
        This page is not exist Please check back later. Thank you. {":)"}
      </p>

      <Link
        href="/"
        className="rounded-lg bg-green-600 py-2 px-4 text-white hover:bg-green-500"
      >
        Go Back
      </Link>
    </div>
  );
}
