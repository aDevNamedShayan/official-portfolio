import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavDock } from "@/components/NavDock/NavDock";
import { SkillSection } from "@/components/SkillSection/SkillSection";

export default function Home() {
  return <main>
    <NavDock />
    {/* <HeroSection /> */}
    <ExperienceSection />
    <SkillSection />
  </main>
}
