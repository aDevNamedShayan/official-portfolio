"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconSend2,
} from "@tabler/icons-react";
import emailjs from '@emailjs/browser';
import { LitUpButton } from "@/components/HeroSection/LitUpBtn/LitUpButton";

export function EmailForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        email: e.target.email.value,
        message: e.target.message.value,
      }

      console.log(emailParams)

      const res = await emailjs.send(serviceID, templateID, emailParams, userID)

      if(res.status === 200) {
        console.log('Email Sent Successfully!')
      }
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="w-1/2 mx-auto max-w-md p-4 md:p-8">
      <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Get in touch
      </h2>
      {/* <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p> */}

      <form className="my-8" onSubmit={handleSubmit}>
        {/* <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div> */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your email</Label>
          <Input id="email" name='email' placeholder="example@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Message</Label>
          <Input id="message" name='message' placeholder="Hello Shayan" is="textarea" />
        </LabelInputContainer>
        {/* <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}

        <LitUpButton
          className="flex items-center gap-2"
          type="submit"
        >
          <IconSend2 stroke={2} />
          Send message 
          {/* <BottomGradient /> */}
        </LitUpButton>

        {/* <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}

        {/* <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  );
}

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
//       <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
//     </>
//   );
// };

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
