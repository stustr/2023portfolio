import React from "react";
import {
  ReactJs,
  Python,
  Flask,
  Html5,
  CssThree,
  Javascript,
  Nodedotjs,
  Npm,
  Pnpm,
  Tailwindcss,
  Jinja,
  Git,
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex align-middle justify-center flex-col"
      data-aos="fade-right"
      data-aos-anchor="#trigger-skills"
      data-aos-duration="1500"
    >
      <h3 className="font-roboto-condensed font-bold text-3xl text-sky-500 pt-4 fi">
        SKILLS
      </h3>
      <h4 className="font-cabin text-l">Experienced with:</h4>
      <ul className="columns-2 list-none list-inside gap-9">
        <li className="flex flex-row gap-5 my-3">
          <Python size={25} />
          Python
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Flask size={25} />
          Flask
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Jinja size={25} />
          Jinja
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Html5 size={25} />
          HTML
        </li>
        <li className="flex flex-row gap-5 my-3">
          <CssThree size={25} />
          CSS
        </li>
        <li className="flex flex-row gap-5 my-3" id="trigger-skills">
          <Javascript size={25} />
          JavaScript
        </li>
        <li className="flex flex-row gap-5 my-3 pt-3">
          <ReactJs size={25} />
          React
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Nodedotjs size={25} />
          Node
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Npm size={25} />
          npm
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Pnpm size={25} />
          pnpm
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Tailwindcss size={25} />
          Tailwind CSS
        </li>
        <li className="flex flex-row gap-5 my-3">
          <Git size={25} />
          Git
        </li>
      </ul>
    </section>
  );
}
