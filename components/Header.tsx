"use client";

import { useScrollDown } from "lib/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

interface NavType {
  title: string;
  path: string;
  current: boolean;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolledtoDown = useScrollDown(50);
  return (
    <header
      className={` sticky top-0 z-50 max-w-full bg-gray-900 py-5 px-5  ${
        isScrolledtoDown && "shadow shadow-green-500"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        <div id="brand">
          <h1 className="ml-2 text-2xl font-bold text-green-600">
            Abdi Zamed Mohamed
          </h1>
        </div>
        <nav id="nav-links" className="flex items-center">
          {desktopNav()}
          <div className="ml-4 inline-flex items-center lg:hidden">
            <button
              className="rounded-md p-2 text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 hover:bg-green-500 hover:text-green-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
      {isOpen && mobileNav({ open: isOpen })}
    </header>
  );
}

const RenderNav = ({ title, path, current }: NavType) => {
  return (
    <li>
      <Link
        href={path}
        className={`text-md inline-flex px-3 py-2 font-medium ${
          current
            ? "rounded-none border-b-0 border-green-600 text-green-600 md:border-b-2"
            : "text-green-100 hover:text-green-600"
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

const desktopNav = () => {
  return (
    <ul className="hidden lg:flex lg:items-center">
      {navigation.map((nav: NavType) => (
        <RenderNav key={nav.title} {...nav} />
      ))}
    </ul>
  );
};

const mobileNav = ({ open }: { open: boolean }) => {
  return (
    <div className="block md:hidden">
      <div
        className={`absolute inset-x-0 ${
          open && "translate-y-0"
        } transform p-2 transition duration-300 ease-in-out`}
      >
        <ul className="flex flex-col  items-start p-5">
          {navigation.map((nav: NavType) => (
            <RenderNav key={nav.title} {...nav} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const navigation: NavType[] = [
  { title: "Home", path: "#", current: false },
  { title: "About", path: "#", current: false },
  { title: "Projects", path: "#", current: false },
  { title: "Contact", path: "#", current: false },
];
