import { useTranslations } from "next-intl";
import { LampHeader } from "../common/LampHeader";
import { DraggyCards } from "./DraggyCards/DraggyCards";

export function SkillSection() {
  const t = useTranslations('SkillsSection')
  return (
    <section id="skills" className="flex flex-col gap-10">
      <LampHeader>
        {t("header")}
      </LampHeader>
      <DraggyCards />
    </section>
  );
}