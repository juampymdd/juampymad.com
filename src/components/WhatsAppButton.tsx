"use client";
import React, { useEffect, useState } from "react";

/**
 * Floating WhatsApp button.
 * - Reads `NEXT_PUBLIC_WHATSAPP_NUMBER` and optional `NEXT_PUBLIC_WHATSAPP_MESSAGE` from env.
 * - Opens WhatsApp (web/mobile) in a new tab.
 */
const WhatsAppButton: React.FC = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
        aria-hidden
      >
        <path d="M20.52 3.48A11.76 11.76 0 0012.06 1C6.02 1 1 6.03 1 12.05c0 2.12.56 4.1 1.62 5.86L1 23l5.33-1.41A11.98 11.98 0 0012.06 23c6.04 0 11.06-5.02 11.06-11.05 0-3-1.2-5.8-3.6-7.47zM12.06 21.5c-1.7 0-3.36-.42-4.86-1.22l-.34-.19-3.15.83.84-3.06-.22-.33A9.45 9.45 0 012.6 12.06C2.6 7.05 6.99 3 12.06 3c2.8 0 5.36 1.1 7.31 3.1 1.96 2 3.03 4.7 2.58 7.45-.5 3.15-3.16 5.73-6.69 6.96-.98.33-1.98.49-2.86.49z" />
        <path d="M17.54 14.08c-.3-.15-1.78-.87-2.06-.98-.28-.11-.48-.15-.68.15-.19.3-.74.98-.9 1.18-.16.2-.32.22-.6.08-.28-.15-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.04-.36-.02-.51-.06-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51-.18-.01-.38-.01-.58-.01-.19 0-.5.07-.76.36-.25.28-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.19 1.94 3.05 4.7 4.27 3.26 1.4 3.26.93 3.84.87.58-.06 1.88-.77 2.15-1.52.27-.74.27-1.37.19-1.52-.07-.15-.27-.24-.57-.39z" />
      </svg>

      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
