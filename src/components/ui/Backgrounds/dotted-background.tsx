import { cn } from "@/lib/utils";

export function DottedBackground() {
  return <>
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#888888_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#555555_1px,transparent_1px)]",
      )}
    />
    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] bg-lightBg dark:bg-darkBg"></div>
  </>
}