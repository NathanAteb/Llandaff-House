import { Calendar, Phone, ShieldCheck } from "lucide-react";
import { LinkButton } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";

export function Hero() {
  return (
    <section className="relative min-h-[640px] max-sm:min-h-[560px] flex items-end text-white overflow-hidden" id="top">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[#2a2a26] bg-cover bg-center"
        style={{ backgroundImage: "url(/photos/patio.jpeg)" }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,42,40,0.7) 0%, rgba(31,42,40,0.64) 28%, rgba(31,42,40,0.7) 56%, rgba(31,42,40,0.92) 100%)",
        }}
      />

      {/* CIW badge — desktop only (top-right) */}
      <div className="absolute z-[2] top-8 right-8 hidden sm:inline-flex bg-white text-ink-900 px-4 py-3 rounded-full font-sans text-[15px] font-semibold items-center gap-2 shadow-lg">
        <ShieldCheck className="w-4 h-4 text-teal-600" strokeWidth={2} />
        CIW inspected · December 2024
      </div>

      {/* Content */}
      <div className="relative z-[1] w-full max-w-[1200px] mx-auto px-6 pt-24 pb-16">
        <Eyebrow className="!text-white mb-3 block [text-shadow:0_2px_7px_rgba(0,0,0,0.58)]">
          A home in Llangennech, since 1991
        </Eyebrow>
        <h1 className="!text-white text-[clamp(36px,5.4vw,68px)] font-medium leading-[1.06] max-w-[16ch] mb-6 [text-shadow:0_8px_30px_rgba(0,0,0,0.45)]">
          A safe, comfortable home in&nbsp;the heart of the village.
        </h1>
        <p className="text-white font-sans text-[22px] leading-[1.3] max-w-[44ch] mb-8 not-italic [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
          Residential and dementia care for 21 residents, delivered with
          kindness, dignity and respect.
        </p>
        <div className="flex gap-3 flex-wrap">
          <LinkButton variant="primary" href="#contact" className="!bg-white !text-teal-500 hover:!bg-ink-100 shadow-[0_10px_28px_rgba(15,23,42,0.4)]">
            <Calendar className="w-[18px] h-[18px]" strokeWidth={1.75} />
            Arrange a visit
          </LinkButton>
          <LinkButton
            variant="secondary"
            href="tel:01554821689"
            className="!bg-teal-500 !text-white !border-teal-500 hover:!bg-teal-600 shadow-[0_10px_28px_rgba(15,23,42,0.4)]"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={1.75} />
            Call us · 01554 821689
          </LinkButton>
          {/* CIW badge — mobile only (inline) */}
          <div className="sm:hidden inline-flex bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-full font-sans text-[15px] font-semibold items-center gap-2">
            <ShieldCheck className="w-4 h-4" strokeWidth={2} />
            CIW inspected · December 2024
          </div>
        </div>
      </div>
    </section>
  );
}
