import About from "@/components/sections/About";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import ProjectsPage from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      <About />
      <ProjectsPage />
      <div
        className="w-full h-screen relative flex items-center justify-center"
        id="contacto"
      >
        <h2 className="text-4xl font-bold text-[#5227FF]">Contacto</h2>
      </div>
    </div>
  );
}
