'use client'

import dynamic from "next/dynamic";
import { IdCard } from "../ui/IdCard/3d-card";
import { LampHeader } from "../common/LampHeader";
import { FormContainer } from "./FormContainer/FormContainer";

// const IdCard = dynamic(() => import('@/components/ui/IdCard/3d-card').then(mod => mod.IdCard), { ssr: false })

export function ContactSection() {
  return (
    <section id='contact'>
      <LampHeader>
        Contact me
      </LampHeader>
      <main className='h-screen relative flex items-center'>
        <IdCard />
        <FormContainer />
      </main>
    </section>
  );
}