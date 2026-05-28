import { FileText, Download } from "lucide-react";
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
              by Care Inspectorate Wales. The most recent return is below; older
              returns are available on request.
            </p>
          </div>

          <a
            href="#"
            className="flex items-center gap-4 p-6 bg-white border border-ink-100 rounded-[12px] no-underline text-ink-900 transition-all duration-150 hover:border-teal-300 hover:shadow-md hover:text-ink-900"
            aria-label="Download the 2025–26 annual return as PDF"
          >
            <span className="w-[52px] h-[52px] shrink-0 bg-teal-50 text-teal-700 rounded-[8px] flex items-center justify-center">
              <FileText className="w-[26px] h-[26px]" strokeWidth={1.5} />
            </span>
            <span className="flex-1">
              <strong className="block font-sans text-[17px] font-semibold">
                2025–26 Annual Return
              </strong>
              <small className="text-ink-500 text-[15px]">
                PDF · placeholder
              </small>
            </span>
            <span className="text-ink-500">
              <Download className="w-5 h-5" strokeWidth={1.75} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
