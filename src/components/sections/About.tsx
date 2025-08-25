"use client";
import React from "react";
import DotGrid from "../DotGrid";
import { TechMarquee } from "../UI/tech-marquee";
import AboutMe from "../UI/about-text";

const About = () => {
  return (
    <div className="w-full h-screen relative" id="sobre-mi">
      <DotGrid
        dotSize={10}
        gap={30}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={200}
        shockRadius={200}
        shockStrength={10}
        resistance={1000}
        returnDuration={1.5}
      />
      {/* Ejemplo de contenido de sección */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen bg-gradient-to-b from-gray-600/30 via-gray-600/10  to-transparent w-full backdrop-blur-xs">
        <div className="flex flex-col items-center h-full">
          <AboutMe />
        </div>
      </div>
      <div className="absolute top-1/2 left-5 ml-20 -translate-x-1/2 -translate-y-1/2 text-center">
        <TechMarquee />
      </div>
    </div>
  );
};

export default About;
