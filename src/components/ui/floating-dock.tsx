'use client'

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse, } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Separator } from "./shadcn/separator";
import { useThemeConfig } from "@/hooks/useThemeConfig";
import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";

const GRADIENTED_ITEM_HREF = '#contact'

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  const { handleThemeChange, themeConfig } = useThemeConfig() 
  const { handleLocaleSwitch, localeConfig } = useLocaleSwitch()

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-center gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 + .2 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900",
                    { 'relative bg-transparent dark:bg-transparent' : GRADIENTED_ITEM_HREF === item.href }
                  )}
                >
                  {GRADIENTED_ITEM_HREF === item.href ?
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-gumGreen to-teal-400 rounded-full animate-gradient-wave -z-1" />
                  : null}
                  <div className="size-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
            <motion.div
              // key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { delay: .15 } }}
              transition={{ delay: .15 }}
              className="w-3/4"
            >
              <Separator orientation="horizontal" />
            </motion.div>
            <motion.div
              // key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { delay: .2 } }}
              transition={{ delay: .1 }}
            >
                <button
                  onClick={handleThemeChange}
                  className="flex size-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={themeConfig.title}
                      initial={{ opacity: 0, x: '-60%' }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, x: '60%' }}
                      transition={{ duration: 0.3 }}
                      className="size-4"
                    >
                      {themeConfig.icon}
                    </motion.div>
                  </AnimatePresence>
                </button>
            </motion.div>
            <motion.div
              // key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { delay: .25 } }}
              transition={{ delay: .05 }}
            >
                <button
                  onClick={handleLocaleSwitch}
                  className="flex size-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={localeConfig.title}
                      initial={{ opacity: 0, x: '-60%' }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, x: '60%' }}
                      transition={{ duration: 0.3 }}
                      className="size-4"
                    >
                      {localeConfig.icon}
                    </motion.div>
                  </AnimatePresence>
                </button>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const { mounted, handleThemeChange, themeConfig } = useThemeConfig() 
  const { handleLocaleSwitch, localeConfig } = useLocaleSwitch()
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: '150%' }}
      animate={{ y: 0 }}
      transition={{ 
        duration: .5, 
        delay: 5.6, 
        ease: [.32, .72, 0, .95] 
      }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <a key={item.title} href={item.href}>
          <IconContainer mouseX={mouseX} {...item} />
        </a>
      ))}
      <Separator orientation="vertical" />
      <button onClick={handleThemeChange}>
        {mounted &&
          <IconContainer 
            mouseX={mouseX} 
            icon={themeConfig.icon}
            title={themeConfig.title}
          />
        }
      </button>
      <button onClick={handleLocaleSwitch}>
        <IconContainer 
          mouseX={mouseX} 
          icon={localeConfig.icon}
          title={localeConfig.title}
        />
      </button>
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  href,
  icon,
}: {
  mouseX: MotionValue;
  title: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer",
        { 'bg-transparent dark:bg-transparent' : GRADIENTED_ITEM_HREF === href }
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
          >
            {GRADIENTED_ITEM_HREF === href ?
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-gumGreen to-teal-400 rounded-md animate-gradient-wave -z-1" />
            : null}
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, x: '-60%' }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: '60%' }}
          transition={{ duration: 0.3 }}
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {GRADIENTED_ITEM_HREF === href ?
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-gumGreen to-teal-400 rounded-full animate-gradient-wave -z-1" />
          : null}
          {icon}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
