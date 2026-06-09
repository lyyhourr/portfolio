"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom"
  | "zoom-out";

type Props = {
  children: React.ReactNode;
  delay?: number;
  animation?: AnimationType;
  className?: string;
};

export default function AnimationWrapper({
  children,
  delay = 0,
  animation = "fade-up",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animations: Record<AnimationType, string> = {
    fade: visible ? "opacity-100" : "opacity-0",

    "fade-up": visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",

    "fade-down": visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-8",

    "fade-left": visible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",

    "fade-right": visible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",

    zoom: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",

    "zoom-out": visible ? "opacity-100 scale-100" : "opacity-0 scale-110",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all
        duration-700
        ease-out
        will-change-transform
        ${animations[animation]}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
