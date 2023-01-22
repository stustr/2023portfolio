import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-neutral-900 text-neutral-900 border-b-2 border-teal-900 flex flex-row justify-between items-end z-50 pb-3">
      <h1
        className="font-permanent-marker text-rose-400 first-letter:text-rose-500 text-5xl hover:first-letter:text-sky-500 hover:text-sky-300"
      >
        <a href="/">SFBS</a>
      </h1>
      <ul className="flex flex-row gap-3 text-xl">
        <li>
          <a className="text-rose-300 hover:text-rose-400" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-rose-200 hover:text-rose-400" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="text-rose-100 hover:text-rose-400" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
