import React from "react";
import Prism from "../Prism";
import ProjectsSection from "../ui/projects";

const ProjectsPage = () => {
  return (
    <div
      className="w-full h-full relative flex items-center justify-center bg-gray-100/10"
      id="proyectos"
    >
      {/* <h2 className="text-4xl font-bold text-[#5227FF]">Proyectos</h2> */}

      <div
        // style={{ width: "100%", height: "100%", position: "absolute" }}
        className="w-full h-full absolute"
      >
        <Prism
          animationType="3drotate"
          timeScale={0.2}
          height={4}
          baseWidth={5.5}
          scale={3.6}
          hueShift={1}
          colorFrequency={1}
          glow={0.4}
          bloom={1}
        />
      </div>
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;
