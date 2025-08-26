import React, { useMemo } from "react";
import { TechIcon, techIcons } from "./tech-icons.data";
import { TechIcons } from "./tech-icons";

type Props = {
  speed?: number; // relative speed (bigger = faster)
  gap?: number; // px gap between items
  pauseOnHover?: boolean;
};

export default function TechMarqueeManual({
  speed = 40,
  gap = 8,
  pauseOnHover = true,
}: Props) {
  // duplicamos la lista para formar un bloque que pueda desplazarse -50%
  const items = useMemo(() => [...techIcons, ...techIcons], []);

  // duración aproximada basada en número de items y velocidad
  const durationSec = Math.max(
    8,
    Math.round((items.length * 6) / (speed / 10))
  );

  return (
    <div className="w-full overflow-hidden">
      <div
        className="marquee-inner flex will-change-transform"
        style={{
          gap: `${gap}px`,
          animation: `marquee ${durationSec}s linear infinite`,
        }}
      >
        {items.map((icon: TechIcon, i: number) => (
          <div key={`${icon.name}-${i}`} className="inline-flex items-center">
            <TechIcons icon={icon} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-inner {
          min-width: 200%;
        }
        .marquee-inner:hover {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>
    </div>
  );
}
