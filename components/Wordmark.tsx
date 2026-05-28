import Image from "next/image";
import { clsx } from "clsx";

export function Wordmark({ className, variant = "default" }: { className?: string; variant?: "default" | "white" }) {
  return (
    <span className={clsx("inline-flex items-center", className)}>
      <Image
        src="/photos/logo.png"
        alt="Llandaff House"
        width={1056}
        height={157}
        className={clsx(
          "h-[34px] w-auto block translate-y-[5px]",
          variant === "white" && "brightness-0 invert"
        )}
        priority
      />
    </span>
  );
}
