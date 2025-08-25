import About from "@/components/sections/About";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      <About />
      <div
        className="w-full h-screen relative flex items-center justify-center"
        id="proyectos"
      >
        <h2 className="text-4xl font-bold text-[#5227FF]">Proyectos</h2>
      </div>
      <div
        className="w-full h-screen relative flex items-center justify-center"
        id="contacto"
      >
        <h2 className="text-4xl font-bold text-[#5227FF]">Contacto</h2>
      </div>
    </div>
  );
}
