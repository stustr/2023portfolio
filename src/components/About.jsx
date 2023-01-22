import React from "react";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";
import facePic from "../assets/img/IMG_0234.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex align-middle justify-center flex-col"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      data-aos-duration="1500"
    >
      <figure className="flex gap-5">
        <img
          src={facePic}
          alt="Photo of Struan"
          className="w-1/ rounded-l-full "
        />
        <figcaption>
          <h3 className="font-roboto-condensed font-bold text-2xl text-sky-500 pt-4 mb-5">
            ABOUT
          </h3>
          <h4 className="font-cabin text-4xl mb-5">I'm Struan</h4>
          <p className="font-cabin mb-3">
            After switching trades, I'm just getting started as a new developer - focusing on clean, functional and
            reliable code. 
          </p>
          <p className="mb-3">Designing/making; breaking/fixing; tinkering/solving. I can do all that, and I can't wait to do it again.</p>
          <p className="">I used to build houses. Now I build digitally.</p>
          <div className="flex gap-4 justify-start mt-9">
            <a href="https://www.linkedin.com/in/struan-sturrock-69b285248">
              <Linkedin size={25} />
            </a>
            <a href="https://github.com/stustr">
              <Github size={25} />
            </a>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
