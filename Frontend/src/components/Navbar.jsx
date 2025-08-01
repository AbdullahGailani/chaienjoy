import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            CHA i ENJOY
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden cursor-pointer"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Overlay Menu */}
        <div
          className={`
            fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 
            flex flex-col items-center justify-center space-y-6 
            text-white text-xl font-medium 
            transform transition-transform duration-300 ease-in-out
            md:hidden z-40
            ${
              menuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 cursor-pointer right-5 text-white text-3xl"
          >
            &times;
          </button>
          {["Menu", "Home", "About", "FAQ", "Contact"].map(
            (text) => (
              <a
                key={text}
                href={`/${text}`}
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </a>
            )
          )}
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="flex text-lg space-x-8 font-medium rtl:space-x-reverse text-gray-900 dark:text-white">
            {[
              "Menu",
              "Home",
              "About",
              "FAQ",
              "Contact",
            ].map((text) => (
              <li key={text}>
                <a
                  href={`/${text}`}
                  className="hover:text-blue-500"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
