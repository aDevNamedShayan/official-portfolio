import { useTranslations } from "next-intl";
import { LampHeader } from "../common/LampHeader";
import { TracingBeam } from "../ui/trancing-beam";
import { ExperienceCard } from "./ExperienceCard";

const ExperienceItems = [
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS' ]
  },
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM' ]
  },
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM' ]
  },
];

export function ExperienceSection() {
  const t = useTranslations('ExpSection')

  return (
    <section id="experiences" className="flex flex-col gap-10">
      <LampHeader>
        {t('header')}
      </LampHeader>
      <TracingBeam wrapperClassName="flex flex-col gap-6">
        {ExperienceItems.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </TracingBeam>
    </section>
  );
}