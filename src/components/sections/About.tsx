"use client";
import React from "react";
import DotGrid from "../DotGrid";

import AboutMe from "../ui/about-text";

const About = () => {
  return (
    <section className="w-full relative" id="sobre-mi">
      {/* DotGrid as an absolutely positioned background that covers the section */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
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
      </div>

      {/* Content: natural height driven by its children */}
      <div className="w-full bg-gradient-to-b from-gray-600/30 via-gray-600/10 to-transparent backdrop-blur-xs">
        <div className="max-w-full mx-auto px-6 py-10">
          <AboutMe />
        </div>
      </div>
    </section>
  );
};

export default About;
