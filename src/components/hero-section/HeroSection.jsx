import React from "react";
import "./hero.css";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

function HeroSection() {
  return (
    <div id="hero-section" className="max-w-7xl mx-auto pt-10 md:pt-20 px-10">
      <section className="section-1 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold">
          VirtualR build tools
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to bg-orange-800 ml-3">
            for <br /> developers
          </span>
        </h1>
        <div className="mt-10 text-gray-400 leading-normal text-md">
          <p>
            Empower your creativity and bring your VR app ideas to life with our
            intuitive development tools.
          </p>
          <p>
            Get stated today and turn your imagination into immersive reality
          </p>
        </div>
        <div className="btn-container mt-10 space-x-5">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to bg-orange-800"
          >
            Start for free
          </button>
          <button type="button" className="border px-4 py-2 rounded-md">
            Documentation
          </button>
        </div>
      </section>
      <section className="section-2 flex gap-5 flex-col justify-center items-center mt-10 md:flex-row">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg  w-full md:w-1/2 border-orange-700 shadow-orange-700 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-full md:w-1/2 border-orange-700 shadow-orange-700 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}

export default HeroSection;
