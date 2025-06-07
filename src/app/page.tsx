import { ContactSection } from "@/components/ContactSection/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { NavDock } from "@/components/NavDock/NavDock";
import { SkillSection } from "@/components/SkillSection/SkillSection";

export default function Home() {
  return <main className='flex flex-col gap-10'>
    <NavDock />
    <HeroSection />
    <SkillSection />
    <ExperienceSection />
    <ContactSection />
  </main>
}
