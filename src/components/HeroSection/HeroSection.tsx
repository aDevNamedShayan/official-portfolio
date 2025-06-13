import { Introduction } from "./introduction";
import { FloatingShayan } from "./floatingShayan";

export function HeroSection() {
  return (
    <section id="home" className="h-screen py-8 flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-0 bg-transparent">
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