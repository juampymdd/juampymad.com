"use client";
import React from "react";
import DotGrid from "../DotGrid";
import { TechMarquee } from "../UI/tech-marquee";

const About = () => {
  return (
    <div className="w-full h-screen relative" id="sobre-mi">
      <DotGrid
        dotSize={3}
        gap={20}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      {/* Ejemplo de contenido de sección */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen bg-gradient-to-b from-gray-600/30 via-gray-600/10  to-transparent w-full backdrop-blur-xs">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-purple-700">Sobre mí</h2>
          <p className="mt-2 text-lg">
            Soy un desarrollador apasionado por la tecnología y la innovación.
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-5 ml-20 -translate-x-1/2 -translate-y-1/2 text-center">
        <TechMarquee />
      </div>
    </div>
  );
};

export default About;
