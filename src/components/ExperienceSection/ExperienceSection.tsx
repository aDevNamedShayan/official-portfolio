'use client' //Temporary fix

import { LampHeader } from "../common/LampHeader";
import { CardSpotlight } from "../ui/card-spotlight";
import { TracingBeam } from "../ui/trancing-beam";
import { motion } from "motion/react";

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-10">
      <LampHeader>
        My Experience
      </LampHeader>
      <TracingBeam wrapperClassName="flex flex-col gap-6">
        {dummyContent.map((item, index) => (
          <CardSpotlight 
            key={index} 
            className="w-full flex flex-col gap-5" 
            canvasWrapperClassName="bg-neutral-100 dark:bg-neutral-800"
            initial={{ opacity: 0, x: 550 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              // delay: 0.3,
              duration: 1,
              ease: 'easeOut',
            }}
            // viewport={{ once: true }}
          >
            <motion.header
              // initial={{ opacity: 0, y: -30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{
              //   delay: .15,
              //   duration: .2,
              //   ease: 'easeOut',
              // }}
              className="z-[1]"
            >
              <h1 className="font-bold">
                {item.title}
              </h1>
              <p className="text-neutral-500 text-sm">{item.timeline}</p>
            </motion.header>

            <motion.p
              // initial={{ opacity: 0, x: -30 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{
              //   delay: .3,
              //   duration: .2,
              //   ease: 'easeOut',
              // }}
              className="z-[1]"
            >
              {item.description}
            </motion.p>

            <ul className="flex flex-wrap gap-2 z-[1]">
              {item.technologies.map((tech, index) => (
                <motion.li 
                  key={tech}
                  className='px-2 py-0.5 bg-lime-400 rounded-lg text-white text-sm font-bold'
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: ((index + 1) * .06 + .4),
                    duration: .15,
                    ease: 'easeOut',
                  }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>

          </CardSpotlight>
        ))}
      </TracingBeam>
    </section>
  );
}

const dummyContent = [
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM']
  },
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM']
  },
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM']
  },
];