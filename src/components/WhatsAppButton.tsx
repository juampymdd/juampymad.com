"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

/**
 * Floating WhatsApp button.
 * - Reads `NEXT_PUBLIC_WHATSAPP_NUMBER` and optional `NEXT_PUBLIC_WHATSAPP_MESSAGE` from env.
 * - Opens WhatsApp (web/mobile) in a new tab.
 */
const WhatsAppButton: React.FC = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5493435142121";
  const rawMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    "Hola! Quiero consultar sobre sus servicios.";
  const encoded = encodeURIComponent(rawMessage);

  const href = phone
    ? `https://wa.me/${phone}?text=${encoded}`
    : `https://wa.me/`;

  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);

  useEffect(() => {
    const hero =
      typeof document !== "undefined" && document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Contactar por WhatsApp"
      title={phone ? "Abrir WhatsApp" : "Abrir WhatsApp (configurar número)"}
      className={
        "fixed bottom-10 right-8 z-50 inline-flex items-center justify-center w-20 h-20 rounded-full text-white transition-transform duration-500 ease-in-out transform-gpu " +
        (isHeroVisible ? "-translate-y-192 " : "translate-y-0 ") +
        "backdrop-blur-2xl border border-white/30 ring-2 ring-violet-400/30 " +
        "shadow-[0_20px_60px_rgba(99,102,241,0.28)] bg-gradient-to-br from-violet-700/50 via-emerald-400/35 to-cyan-300/35 " +
        "hover:scale-110 animate-[pulse_2s_infinite]"
      }
    >
      {/* subtle glowing layer */}
      <span
        className="absolute inset-0 rounded-full -z-10 blur-2xl opacity-60 bg-gradient-to-br from-violet-700/40 via-emerald-400/30 to-cyan-300/30"
        aria-hidden
      />
      <Image
        width={40}
        height={40}
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        className="fill-white stroke-white"
      />

      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
