import DotGrid from "@/components/DotGrid";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      <div className="w-full h-screen relative" id="sobre-mi">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        {/* Ejemplo de contenido de sección */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#5227FF]">Sobre mí</h2>
          <p className="text-lg text-white">Breve descripción sobre ti...</p>
        </div>
      </div>
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

      {/* <ProfileCard
        name="Juan Pablo Maddoni"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="juampy.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
      /> */}
    </div>
  );
}
