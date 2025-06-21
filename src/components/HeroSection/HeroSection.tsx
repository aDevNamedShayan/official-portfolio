import { Introduction } from "./introduction";
import { FloatingShayan } from "./floatingShayan";
// import { Vortex } from "../ui/Backgrounds/vortex";
// import Beams from "../ui/Backgrounds/beams";
import { Silk } from "../ui/Backgrounds/silk";
// import { BackgroundBeams } from "../ui/Backgrounds/beams-svg";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className={cn(
        "relative h-[110svh] min-h-[42rem] py-8 flex flex-col-reverse lg:flex-row justify-around items-center gap-0",
        "bg-gradient-to-b from-transparent from-90% to-lightBg dark:to-darkBg to-100%"
      )}
    >
      {/* <Vortex
        backgroundColor="transparent"
        rangeY={350}
        particleCount={500}
        baseHue={100}
        baseSpeed={.75}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={3}
        containerClassName="flex justify-between items-center"
        className="w-full flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-0"
      > */}
      {/* <Beams
        beamWidth={2}
        beamHeight={25}
        beamNumber={12}
        lightColor="#4ac99c"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      /> */}
      <Silk
        speed={5}
        scale={1}
        // color="#4ac99c"
        // color="#3ba37e"
        // color="#006944"
        // color="#00754c"
        color="#00ffa6"
        // noiseIntensity={1.5}
        noiseIntensity={0}
        rotation={0}
      />
      {/* <BackgroundBeams /> */}
        <Introduction />
        <FloatingShayan />
      {/* </Vortex> */}
    </section>
  );
}