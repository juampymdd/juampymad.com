import DarkVeil from "../DarkVeil";
import RotatingText from "../RotatingText";
import SplitText from "../SplitText";

export const Hero = () => {
  return (
    <div className="w-full h-screen relative" id="inicio">
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
        <DarkVeil />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full relative z-10">
        <div className="flex absolute w-full justify-center items-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2">
          <span className="text-2xl md:text-4xl xl:text-7xl font-bold text-white mr-1">
            {" "}
            Creamos tu
          </span>
          <div className="flex justify-center bg-gradient-to-t from-violet-500/20 via-violet-500/10 ring ring-violet-950/50 to-transparent backdrop-blur-2xl rounded-xl px-2 py-2 min-w-[11rem] md:min-w-[18rem] xl:min-w-[31rem] shadow-2xl">
            <RotatingText
              texts={["Landing Page", "Portfolio", "Web APP", "App Mobile"]}
              mainClassName="text-2xl md:text-4xl xl:text-7xl font-bold text-white overflow-hidden rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <SplitText
          text="Llevamos tu presencia digital al siguiente nivel"
          className="text-xs px-4 md:text-xl xl:text-2xl font-semibold text-center -mt-8 md:mt-1 text-violet-200 tracking-wider"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};
