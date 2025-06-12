'use client'

import dynamic from "next/dynamic";
import { IdCard } from "../ui/IdCard/3d-card";
import { LampHeader } from "../common/LampHeader";
import { FormContainer } from "./FormContainer/FormContainer";
import { useTranslations } from "next-intl";

// const IdCard = dynamic(() => import('@/components/ui/IdCard/3d-card').then(mod => mod.IdCard), { ssr: false })

export function ContactSection() {
  const t = useTranslations("ContactSection")

  return (
    <section id='contact'>
      <LampHeader>
        {t('header')}
      </LampHeader>
      <main className='h-screen relative flex items-center'>
        <IdCard />
        <FormContainer />
      </main>
    </section>
  );
}