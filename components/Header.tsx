import Link from "next/link";
import React from "react";

interface NavType {
  title: string;
  path: string;
  current: boolean;
}

const RenderNav = ({ title, path, current }: NavType) => {
  return (
    <li>
      <Link
        href={path}
        className={`text-md inline-flex px-3 py-2 font-medium ${
          current
            ? "rounded-none border-b-2 border-green-600 text-green-600"
            : "text-green-100 hover:text-green-600"
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
export default function Header() {
  return (
    <header className="max-w-full py-5 px-5 shadow md:px-0 md:shadow-none">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        <div id="brand">
          <h1 className="ml-2 text-2xl font-bold text-green-600">
            Abdi Zamed Mohamed
          </h1>
        </div>
        <nav id="nav-links" className="flex items-center">
          <ul className="hidden lg:flex lg:items-center">
            {navigation.map((nav: NavType) => (
              <RenderNav key={nav.title} {...nav} />
            ))}
          </ul>

          <div className="ml-4 inline-flex items-center lg:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-green-600 hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

const navigation: NavType[] = [
  { title: "Home", path: "#", current: true },
  { title: "About", path: "#", current: false },
  { title: "Projects", path: "#", current: false },
  { title: "Contact", path: "#", current: false },
];
