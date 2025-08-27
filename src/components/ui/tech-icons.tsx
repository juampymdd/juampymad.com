import React from "react";
import { TechIcon } from "./tech-icons.data";
import Image from "next/image";

export const TechIcons = ({ icon }: { icon: TechIcon }) => {
  return (
    <div className="flex-col items-center justify-center p-2 gap-1 hover:scale-110 transition-transform duration-200 backdrop-blur-xs bg-gray-200/10 shadow-xl ring-1 ring-gray-300/40 rounded-full w-24 h-24 hidden md:inline-flex">
      <Image
        src={icon.src}
        alt={icon.label}
        width={30}
        height={30}
        className={`w-10 h-10 object-contain ${icon.hue} drop-shadow-2xl`}
      />
      <span className="font-mono tracking-wider text-xs">{icon.label}</span>
    </div>
  );
};
