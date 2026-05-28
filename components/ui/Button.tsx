import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2.5 rounded-[12px] font-sans font-semibold text-[17px] leading-none cursor-pointer !no-underline border border-transparent transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-teal-600 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-teal-500 text-white px-[22px] py-[14px] hover:bg-teal-600 hover:text-white",
  secondary:
    "bg-transparent text-teal-700 border-teal-600 px-[22px] py-[14px] hover:bg-teal-50",
  ghost: "bg-transparent text-ink-900 px-[14px] py-[10px] hover:text-teal-700",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
  children: ReactNode;
};

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({ variant = "primary", className, children, ...rest }: LinkButtonProps) {
  return (
    <a className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
