import Image from "next/image";
import Me from '@/assets/Shayan.jpg'
import { LitUpButton } from "./LitUpBtn/LitUpButton";
import { Vortex } from "../ui/vortex";

export function HeroSection() {
  return (
    <section className="px-30 h-screen flex justify-between items-center bg-transparent">
      <Vortex
        backgroundColor="black"
        rangeY={400}
        particleCount={1000}
        baseHue={120}
        // baseSpeed={3}
        containerClassName="flex justify-between items-center"
        className="w-full flex justify-between items-center"
      >
        <div className="max-w-[30rem] flex flex-col justify-center item-center gap-4">
          <h1 className="text-black dark:text-white font-bold text-5xl">I&apos;m Shayan Noori</h1>
          <span className="text-lg">A front-end Developer</span>
          <span>I am a front-end developer specializing in JavaScript, TypeScript, React.js and Next.js, and I bring fast, responsive, and search engine optimized websites to life.</span>
          <LitUpButton />
        </div>
        <Image 
          src={Me} 
          alt='Picture of Shayan Noori' 
          className="rounded-full size-96"
        />
      </Vortex>
    </section>
  );
}