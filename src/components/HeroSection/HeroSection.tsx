import { Introduction } from "./introduction";
import { FloatingShayan } from "./floatingShayan";
import { Vortex } from "../ui/vortex";

export function HeroSection() {
  return (
    <section id="home" className="lg:h-screen py-8 bg-transparent">
      <Vortex
        backgroundColor="transparent"
        rangeY={350}
        particleCount={400}
        baseHue={100}
        baseSpeed={.75}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={3}
        containerClassName="flex justify-between items-center"
        className="w-full flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-0"
      >
        <Introduction />
        <FloatingShayan />
      </Vortex>
    </section>
  );
}