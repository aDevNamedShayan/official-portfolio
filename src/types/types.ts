import { Color, IUniform } from "three";
import { HTMLMotionProps } from "motion/react";

export interface ThemeConfigInter {
  icon: React.ReactNode;
  title: string;
  next: string;
}

export interface ExperienceItemInter {
  title: string;
  timeline: string;
  description: string;
  technologies: string[];
}

export interface LitUpBtnProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  disabled?: boolean;
  fullyRounded?: boolean;
}

export interface LitUpLinkProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  is?: 'input' | 'textarea';
}

// Canvas Reveal Effect👇

export interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

export interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

export type Uniforms = {
  [key: string]: {
    value: number[] | number[][] | number;
    type: string;
  };
};

export interface ShaderProps {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number;
      type: string;
    };
  };
  maxFps?: number;
}

// Silk👇


export interface UniformValue<T = number | Color> {
  value: T;
}

export interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

export interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}