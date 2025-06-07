import { cn } from "@/lib/utils";

interface LitUpBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function LitUpButton({ children, className, ...props }: LitUpBtnProps) {
  return (
    <button 
      className="max-w-fit p-[3px] relative font-medium"
      { ...props }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-500 rounded-lg animate-gradient-wave" />
      <div className={cn(
        "px-8 py-2 bg-lightBg dark:bg-darkBg rounded-[6px] relative group transition duration-200 text-black hover:text-white dark:text-white hover:bg-transparent dark:hover:bg-transparent",
        className
      )}>
        {children}
      </div>
    </button>
  );
}