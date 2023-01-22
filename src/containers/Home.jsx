import React from "react";
import { useEffect } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
