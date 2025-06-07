'use client'

import dynamic from "next/dynamic";
import { EmailForm } from "../ui/Form/emailForm";
import { IdCard } from "../ui/IdCard/3d-card";
import { LampHeader } from "../common/LampHeader";

// const IdCard = dynamic(() => import('@/components/ui/IdCard/3d-card').then(mod => mod.IdCard), { ssr: false })

export function ContactSection() {
  return (
    <section id='contact'>
      <LampHeader>
        Contact me
      </LampHeader>
      <main className='h-screen flex items-center'>
        <IdCard />
        <EmailForm />
      </main>
    </section>
  );
}