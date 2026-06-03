import { ReactNode } from "react";
import { clsx } from "clsx";

interface FactProps {
  icon: ReactNode;
  title: string;
  sub: string;
  className?: string;
}

export function Fact({ icon, title, sub, className }: FactProps) {
  return (
    <div className={clsx("bg-white border border-ink-100 rounded-[12px] px-6 py-5 flex items-start gap-4", className)}>
      <span className="shrink-0 text-teal-600">{icon}</span>
      <div className="font-sans text-[17px] text-ink-900 leading-snug">
        <strong className="block font-semibold">{title}</strong>
        <small className="block text-[15px] text-ink-500 mt-0.5">{sub}</small>
      </div>
    </div>
  );
}
