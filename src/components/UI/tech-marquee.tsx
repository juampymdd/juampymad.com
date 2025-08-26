import React from "react";
import { TechIcons } from "./tech-icons";
import { techIcons } from "./tech-icons.data";
import LogoLoop from "../LogoLoop";

export const TechMarquee = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Bottom band: force logos to stay at the bottom of the Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 flex items-center justify-center pointer-events-none">
        <LogoLoop
          logos={techIcons.map((icon) => ({
            node: <TechIcons key={icon.name} icon={icon} />,
          }))}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={28}
          pauseOnHover
          scaleOnHover
          // fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
          className="w-full max-w-full"
        />
      </div>
    </div>
  );
};
