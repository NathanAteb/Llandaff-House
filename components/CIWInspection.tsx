import { Utensils, ShieldCheck } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";

export function CIWInspection() {
  return (
    <section className="py-24 max-md:py-16 bg-sage-100" id="inspection">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mb-12">
          <Eyebrow className="block mb-3">Care Inspectorate Wales</Eyebrow>
          <h2 className="mb-3">Inspected, and proud to share.</h2>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] max-md:grid-cols-1 gap-16 items-center p-12 max-md:p-8 bg-white border border-ink-100 rounded-[18px] shadow-sm">
          <blockquote className="text-[27px] max-md:text-[22px] !m-0 !border-teal-600">
            &ldquo;The environment was safe, secure and well-maintained. People
            spoke positively about the care they receive, describing staff as
            nice and noting they receive kind and caring support.&rdquo;
            <cite>— Care Inspectorate Wales, December 2024</cite>
          </blockquote>

          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3 p-[14px_18px] bg-teal-50 border border-teal-200 rounded-[12px] font-sans">
              <Utensils className="w-6 h-6 text-teal-700 shrink-0" />
              <div>
                <strong className="text-[27px] text-teal-700 block leading-none">
                  5 / 5
                </strong>
                <span className="text-ink-700 text-[15px]">
                  Food Hygiene Rating · Very Good
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 p-[14px_18px] bg-teal-50 border border-teal-200 rounded-[12px] font-sans">
              <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0" />
              <div>
                <strong className="text-[27px] text-teal-700 block leading-none">
                  SIN-00009093-CGLK
                </strong>
                <span className="text-ink-700 text-[15px]">
                  CIW registration ·{" "}
                  <a
                    href="https://www.careinspectorate.wales/service/SIN-00009093-CGLK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    read the full report
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
