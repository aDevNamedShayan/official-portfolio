import { LampHeader } from "../common/LampHeader";
import { DraggyCards } from "./DraggyCards/DraggyCards";

export function SkillSection() {
  return (
    <section className="flex flex-col gap-10">
      <LampHeader>
        My Skills
      </LampHeader>
      <DraggyCards />
    </section>
  );
}