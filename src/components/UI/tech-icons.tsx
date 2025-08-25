import React from "react";
import { TechIcon } from "./tech-icons.data";
import Image from "next/image";

export const TechIcons = ({ icon }: { icon: TechIcon }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center p-2 gap-4 hover:scale-110 transition-transform duration-200 backdrop-blur-xs bg-gray-200/10 shadow-xl ring-1 ring-gray-300/40 rounded-full w-40 h-40">
      <Image
        src={icon.src}
        alt={icon.label}
        width={80}
        height={80}
        className="w-20 h-20 object-contain hue-rotate-60 drop-shadow-2xl"
      />
      <span className="font-mono tracking-wider text-sm">{icon.label}</span>
    </div>
  );
};
