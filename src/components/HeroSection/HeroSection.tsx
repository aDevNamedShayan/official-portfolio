import { Vortex } from "../ui/vortex";
import { Introduction } from "./introduction";
import { FloatingShayan } from "./floatingShayan";

export function HeroSection() {
  return (
    <section id="home" className="px-30 h-screen flex justify-between items-center bg-transparent">
      {/* <Vortex
        backgroundColor="transparent"
        rangeY={350}
        particleCount={300}
        baseHue={120}
        baseSpeed={.75}
        rangeSpeed={1.5}
        baseRadius={0}
        // rangeRadius={2}
        containerClassName="flex justify-between items-center"
        className="w-full flex justify-between items-center"
      > */}
        <Introduction />
        <FloatingShayan />
      {/* </Vortex> */}
    </section>
  );
}