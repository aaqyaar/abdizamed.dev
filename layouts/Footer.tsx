"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Footer() {
  const isHome = window.location.pathname === "/";
  return (
    <>
      {!isHome && (
        <footer className="flex h-96 w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="flex w-full max-w-7xl flex-col items-center justify-center">
            <h1 className="text-center text-7xl font-bold text-gray-800 dark:text-gray-400">
              Contact
            </h1>
            <p className="text-center text-lg text-gray-600">
              {"I'm "} always open to new opportunities and collaborations.
            </p>

            <div className="mt-10 flex w-full flex-col items-center justify-center">
              <div className="flex w-full max-w-4xl flex-col items-center justify-center">
                <div className="flex h-12 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                  <input
                    className="flex h-full w-full flex-1 rounded-full border-2 px-4 focus:outline-none dark:border-0 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    type="text"
                    placeholder="Your email"
                  />
                  <button className="flex h-full w-12 flex-none rounded-full bg-gray-100 dark:bg-gray-800">
                    <HiArrowRight className="m-auto flex h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
