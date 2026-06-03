"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const logoEase = [0.22, 1, 0.36, 1] as const;

type AnimatedLogoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function AnimatedLogo({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
  children,
}: AnimatedLogoProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: logoEase }}
      className={`relative inline-flex items-center gap-3 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        priority={priority}
      />
      {children}
      {!shouldReduceMotion ? (
        <m.span
          aria-hidden="true"
          initial={{ x: "-130%", opacity: 0 }}
          animate={{ x: "145%", opacity: [0, 0.7, 0] }}
          transition={{ delay: 0.5, duration: 1.45, ease: logoEase }}
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.34),rgba(112,231,255,0.18),transparent)]"
        />
      ) : null}
    </m.div>
  );
}
