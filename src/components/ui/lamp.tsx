"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-96 flex-col items-center justify-center bg-transparent w-full overflow-hidden rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full h-full flex-1 items-center justify-center isolate z-0 ">

        {/* Base Reflection */}
        <div className="absolute top-[50%] -translate-y-1/2 inset-auto z-1 h-36 w-[28rem] rounded-full bg-teal-500 opacity-50 blur-3xl"></div>

        {/* Lamp Reflection */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-4/10 -translate-y-1/2 inset-auto h-36 w-64 rounded-full bg-emerald-400 blur-2xl"
        ></motion.div>

        {/* The Lamp */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-4/10 -translate-y-1/2 inset-auto z-1 h-0.5 rounded-full w-[30rem] bg-emerald-400"
        ></motion.div>

        {/* Upper section's Lamp Reflection dimmer */}
        <div className="absolute top-0 inset-auto h-4/10 w-[30%] rounded-t-full bg-lightBg dark:bg-darkBg"></div>
      </div>

      <div className="absolute top-[50%] inset-auto">
        {children}
      </div>
    </div>
  );
};