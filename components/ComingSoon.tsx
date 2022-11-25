import Link from "next/link";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="mx-4 flex h-[70vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Coming Soon
      </h1>
      <p className="py-4 text-gray-600 dark:text-gray-400">
        This page is under construction and will be available soon. <br />{" "}
        Please check back later. Thank you. {":)"}
      </p>

      <Link
        href="/"
        className="inline-flex items-center font-medium text-green-600 hover:underline dark:text-green-500"
      >
        Go Back
      </Link>
    </div>
  );
}
