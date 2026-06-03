import { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component className={clsx("bg-white border border-ink-100 rounded-[18px] p-8 max-md:p-6 shadow-sm", className)}>
      {children}
    </Component>
  );
}
