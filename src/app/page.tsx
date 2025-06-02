import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavDock } from "@/components/NavDock/NavDock";
import { SkillSection } from "@/components/SkillSection/Skills";

export default function Home() {
  return <>
    <NavDock />
    <HeroSection />
    <SkillSection />
  </>
}
