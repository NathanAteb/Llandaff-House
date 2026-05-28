import { ReactNode } from "react";
import { clsx } from "clsx";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "font-sans text-[13px] font-semibold tracking-[0.14em] uppercase text-teal-600",
        className
      )}
    >
      {children}
    </span>
  );
}
