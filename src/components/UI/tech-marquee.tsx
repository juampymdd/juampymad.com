import React from "react";
import { TechIcons } from "./tech-icons";
import { techIcons } from "./tech-icons.data";
import InfiniteScroll from "../InfiniteScroll";
import LogoLoop from "../LogoLoop";

export const TechMarquee = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center z-1">
      {/* <InfiniteScroll
        items={techIcons.map((icon) => ({
          content: <TechIcons key={icon.name} icon={icon} />,
        }))}
        isTilted={false}
        tiltDirection="right"
        autoplay={true}
        autoplaySpeed={1}
        autoplayDirection="down"
        pauseOnHover={false}
      /> */}
      <LogoLoop
        logos={techIcons.map((icon) => ({
          node: <TechIcons key={icon.name} icon={icon} />,
        }))}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};
