import { CardSpotlight } from "../ui/card-spotlight";
import { TracingBeam } from "../ui/trancing-beam";

export function ExperienceSection() {
  return (
    <section>
      <TracingBeam wrapperClassName="flex flex-col gap-10">
        {/* <div className="mx-auto antialiased pt-4 relative"> */}
          {dummyContent.map((item, index) => (
          <CardSpotlight key={index} className="w-full aspect-[4/1]" canvasWrapperClassName="bg-neutral-200 dark:bg-neutral-800">
            <h3 className="font-bold z-10">
              {item.title}
            </h3>
            <p className="text-neutral-500 text-sm z-50">{item.timeline}</p>
          </CardSpotlight>
          //   <div key={`content-${index}`} className="mb-10">
          //     <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
          //       {item.badge}
          //     </h2>
  
          //     <p className={"text-xl mb-4"}>
          //       {item.title}
          //     </p>
  
          //     <div className="text-sm  prose prose-sm dark:prose-invert">
          //       {item?.image && (
          //         <img
          //           src={item.image}
          //           alt="blog thumbnail"
          //           height="1000"
          //           width="1000"
          //           className="rounded-lg mb-10 object-cover"
          //         />
          //       )}
          //       {item.description}
          //     </div>
          //   </div>
          ))}
        {/* </div> */}
      </TracingBeam>
    </section>
  );
}

const dummyContent = [
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
  {
    title: 'Full-Stack Developer · WebKade',
    timeline: 'June 2023 - January 2024',
    description: 'As a Full Stack Web Developer at Webkade, I design and maintain dynamic web applications, ensuring seamless user experiences and efficient functionality. I use Next.js and TailwindCSS for responsive front-end interfaces and Node.js, PostgreSQL, and Drizzle ORM for scalable back-end solutions. Collaborating with cross-functional teams, I deliver high-quality applications tailored to client and user needs.',
    technologies: [ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'react-hook-form', 'TRPC', 'Drizzle ORM']
  },
];