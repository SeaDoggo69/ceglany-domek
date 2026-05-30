"use client";

import { type ReactNode, type ElementType } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = false,
  threshold = 0.15,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);
  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}
