'use client'

import { useTranslations } from "next-intl";
import { LampHeader } from "../common/LampHeader";
import { IdCard } from "../ui/IdCard/3d-card";
import { FormContainer } from "./FormContainer/FormContainer";

export function ContactSection() {
  const t = useTranslations("ContactSection")

  return (
    <section id='contact'>
      <LampHeader>
        {t('header')}
      </LampHeader>
      <main className='relative flex flex-col lg:flex-row justify-center items-center'>
        <IdCard />
        <FormContainer />
      </main>
    </section>
  );
}