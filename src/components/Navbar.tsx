"use client";
import React, { useEffect, useState, useRef } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Detecta sección activa
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.offset < b.offset ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula posición del subrayado
  useEffect(() => {
    const updateUnderline = () => {
      const activeIndex = sections.findIndex((s) => s.id === activeSection);
      const activeLink = linksRef.current[activeIndex];

      if (activeLink) {
        const parentRect = activeLink.parentElement?.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        if (parentRect) {
          setUnderlineStyle({
            width: linkRect.width,
            left: linkRect.left - parentRect.left,
          });
        }
      }
    };

    // Pequeño delay para asegurar que el DOM esté renderizado
    const timer = setTimeout(updateUnderline, 50);
    window.addEventListener("resize", updateUnderline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeSection]);

  // Click en link
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex fixed md:items-center top-6 left-1/2 z-40 -translate-x-1/2 px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        {/* Logo */}
        <div className="rounded-full px-2 ring shadow-sm ring-white/20 mr-10 flex items-center justify-center bg-gradient-to-t from-white/40 via-white/10 to-transparent hover:bg-gradient-to-t hover:from-white/30 hover:via-transparent hover:to-transparent transition-all duration-300">
          {/* <img src="/logo.svg" alt="Logo" className="w-14 h-14 " /> */}
          <div className="text-white text-xl font-normal select-none p-2 flex items-center justify-center gap-1 ">
            {/* <span className="text-2xl tracking-widest">Juampymad</span> */}
            <div className="flex items-center">
              <span className="text-3xl pb-1 text-purple-400 font-bold">
                {">"}
              </span>
              <span className="text-2xl -m-1 pb-1 animate-pulse duration-75 font-bold">
                _
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex">
          {/* Subrayado deslizante */}
          <div
            className="absolute bottom-0 h-0.5 bg-white rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          />

          {sections.map(({ id, label }, index) => (
            <a
              key={id}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              href={`#${id}`}
              className={`px-4 py-1 font-bold text-lg transition-all duration-700 border-none cursor-pointer ${
                activeSection === id
                  ? "text-white bg-gradient-to-t from-white/30 via-transparent to-transparent rounded-t-sm border-white"
                  : "text-white/70 hover:text-white hover:bg-gradient-to-t hover:from-white/30 hover:via-transparent hover:to-transparent"
              }`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              <span className="tracking-wider">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden fixed top-6 left-4 z-40">
        <button
          className="w-12 h-12 flex flex-col justify-center items-center rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-5 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-16 left-0 w-56 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex flex-col gap-2 px-4 py-6 transition-all duration-300 ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-3 font-bold text-lg transition-all duration-300 rounded-xl relative ${
                activeSection === id
                  ? "text-white bg-white/20"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {label}
              {/* Indicador activo para mobile */}
              {activeSection === id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full" />
              )}
            </a>
          ))}
        </div>
      </nav>

      <style jsx>{`
        /* Glassmorphism effects */
        nav {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
      `}</style>
    </>
  );
};
