import { useTranslations } from "next-intl";
import { LampHeader } from "../common/LampHeader";
import { TracingBeam } from "../ui/trancing-beam";
import { ExperienceCard } from "./ExperienceCard";


export function ExperienceSection() {
  const t = useTranslations('ExpSection')
  
  const ExperienceItems = [
    {
      title: t('apancoTitle'),
      timeline: t('apancoTimeline'),
      description: t('apancoDescription'),
      technologies: [ 'React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Formik', 'Yup', 'Vite', 'Zustand', 'Jest', 'React Testing Library' ]
    },
    {
      title: t('sepehrTitle'),
      timeline: t('sepehrTimeline'),
      description: t('sepehrDescription'),
      technologies: [ 'React.js', 'Tailwind CSS', 'TanStack Query', 'React Strap', 'React-hook-form', 'Zod', 'Vite', 'Context API' ]
    },
  ];

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