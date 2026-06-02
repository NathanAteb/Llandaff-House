import { FileText, Clock } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";

export function AnnualReturn() {
  return (
    <section className="py-24 max-md:py-16 bg-cream-100" id="documents">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr] max-md:grid-cols-1 gap-12 items-center">
          <div>
            <Eyebrow className="block">Annual return &amp; compliance</Eyebrow>
            <h2 className="mt-3">Published here each year.</h2>
            <p>
              Our annual return is published on this page every year, as required
              by Care Inspectorate Wales. The most recent return will be
              available here shortly; older returns are available on request.
            </p>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white border border-ink-100 rounded-[12px]">
            <span className="w-[52px] h-[52px] shrink-0 bg-teal-50 text-teal-700 rounded-[8px] flex items-center justify-center">
              <FileText className="w-[26px] h-[26px]" strokeWidth={1.5} />
            </span>
            <span className="flex-1">
              <strong className="block font-sans text-[17px] font-semibold text-ink-900">
                2025–26 Annual Return
              </strong>
              <small className="text-ink-500 text-[15px] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                Coming soon
              </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
