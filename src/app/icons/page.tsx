import { TechIcon, techIcons } from "@/components/UI/tech-icons.data";
import Image from "next/image";
import React from "react";

const IconsPage = () => {
  return (
    <div className="flex flex-wrap gap-4 bg-gray-600">
      {techIcons.map((icon: TechIcon) => (
        <div key={icon.label}>
          <Image
            src={icon.src}
            alt={icon.label}
            className={`h-30 w-30 ${icon.hue}`}
            width={60}
            height={60}
          />
          <span>{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconsPage;
