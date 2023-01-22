import React from "react";
import Project from "./Project";
export default function Portfolio() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col align-middle justify-center"
      data-aos="zoom-in"
      data-aos-anchor="#trigger-portfolio"
      data-aos-duration="1500"
    >
      <h3 className="font-roboto-condensed font-bold text-2xl text-sky-500 pt-4 mb-11">
        PROJECTS
      </h3>
      <div className="mt-5 flex justify-center items-center">
        <Project />
        <div id="trigger-portfolio"></div>
      </div>
    </section>
  );
}
