import React from "react";
import { TechIcons } from "./tech-icons";
import { techIcons } from "./tech-icons.data";
import InfiniteScroll from "../InfiniteScroll";

export const TechMarquee = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <InfiniteScroll
        items={techIcons.map((icon) => ({
          content: <TechIcons key={icon.name} icon={icon} />,
        }))}
        isTilted={false}
        tiltDirection="right"
        autoplay={true}
        autoplaySpeed={1}
        autoplayDirection="down"
        pauseOnHover={false}
      />
    </div>
  );
};
