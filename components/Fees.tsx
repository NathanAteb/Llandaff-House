import { MessageCircle, Check } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { LinkButton } from "./ui/Button";

export function Fees() {
  return (
    <section className="py-24 max-md:py-16" id="fees">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
          <div>
            <Eyebrow className="block">Fees &amp; funding</Eyebrow>
            <h2 className="mt-3">Plain, honest pricing.</h2>
            <p>
              Local authority funded placements are accepted with no top-up
              required. We&apos;re happy to talk through your individual
              circumstances — just give us a ring.
            </p>
            <LinkButton variant="primary" href="#contact" className="mt-2">
              <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.75} />
              Talk to us about fees
            </LinkButton>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-baseline px-6 py-4 bg-white border border-ink-100 rounded-[8px] font-sans">
              <span className="text-ink-700">Weekly fee · from</span>
              <strong className="font-serif text-[27px] text-ink-900 font-medium">
                £688.51
              </strong>
            </div>
            <div className="flex justify-between items-baseline px-6 py-4 bg-white border border-ink-100 rounded-[8px] font-sans">
              <span className="text-ink-700">Weekly fee · to</span>
              <strong className="font-serif text-[27px] text-ink-900 font-medium">
                £726.07
              </strong>
            </div>
            <div className="flex justify-between items-center px-6 py-4 bg-teal-50 border border-teal-200 rounded-[8px] font-sans">
              <span className="text-teal-700">Local authority placements</span>
              <Check className="w-6 h-6 text-teal-700" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
