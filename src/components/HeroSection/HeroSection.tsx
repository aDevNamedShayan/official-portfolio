import { Introduction } from "./introduction";
import { FloatingShayan } from "./floatingShayan";
import { Silk } from "../ui/Backgrounds/silk";
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
      <Silk
        color="#00ffa6"
        noiseIntensity={0}
      />
      <Introduction />
      <FloatingShayan />
    </section>
  );
}