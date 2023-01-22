import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import project1 from "../assets/img/Screenshot 2022-11-18 at 15.02.23.png";
import project2 from "../assets/img/Screenshot 2022-12-11 at 16.54.14.png";
import project3 from "../assets/img/quoteApp.png";
import project4 from "../assets/img/markdownPreview.png";
import project5 from "../assets/img/timerApp.png";

export default function Project() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <figure>
            <img
              src={project2}
              alt="country crammer app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center mt-11">
              <h4 className="text-lg font-semibold mb-3">
                API enhanced Javascript app
              </h4>
              <ul className="list-disc text-left">
                <li>
                  Various API fetches called to import data on weather,
                  currency, flags etc.
                </li>
                <li>Leaflet capabilities used for mapping data</li>
              </ul>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src={project1}
              alt="corbett climber app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center mt-11">
              <h4 className="text-lg font-semibold mb-3">Corbett Climber</h4>
              <ul className="list-disc text-left">
                <li>RESTful CRUD app built using Python, Jinja and Flask</li>
                <li>
                  Provides information on the Corbetts of Scotland allows user
                  to track climbs displays graphical representations of activity
                  (Matplotlib)
                </li>
              </ul>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src={project3}
              alt="random quote app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center mt-11">
              <h4 className="text-lg font-semibold mb-3">Qrious Quoter</h4>
              <ul className="list-disc text-left">
                <li>Stateful React App</li>
                <li>
                  Simple logic for random api call, and random color generation
                </li>
              </ul>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src={project4}
              alt="markdown converter app"
              className="w-1/2 mx-auto"
            />
            <figcaption className=" w-1/3 mx-auto text-center mt-11">
              <h4 className="text-lg font-semibold mb-3">Markdown Previewer</h4>
              <ul className="list-disc text-left">
                <li>Stateful React App</li>
                <li>Live in browser markdown-previewer</li>
              </ul>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={project5} alt="timer app" className="w-1/2 mx-auto" />
            <figcaption className=" w-1/3 mx-auto text-center mt-11">
              <h4 className="text-lg font-semibold mb-3">Markdown Previewer</h4>
              <ul className="list-disc text-left">
                <li>Timer App</li>
                <li>
                  Stateful React app allowing the user to set duration and break
                  duration.
                </li>
              </ul>
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
