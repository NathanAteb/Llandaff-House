import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-teal-500 text-white pt-16 pb-8 font-sans text-[15px] leading-[1.55]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] max-sm:grid-cols-2 gap-8 mb-12">
          <div>
            <a href="/" className="inline-flex mb-4">
              <Wordmark variant="white" />
            </a>
            <p className="mt-3.5 text-white/70 text-[15px] max-w-[32ch] m-0">
              A safe, comfortable home in the heart of Llangennech — caring
              since 1991.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-[13px] tracking-[0.14em] uppercase text-white/60 m-0 mb-3">
              Visit us
            </h4>
            <p className="m-0">
              6 Mwrwg Road
              <br />
              Llangennech
              <br />
              Llanelli, SA14 8UA
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-[13px] tracking-[0.14em] uppercase text-white/60 m-0 mb-3">
              Ring us
            </h4>
            <p className="m-0">
              <a href="tel:01554821689" className="!text-white underline">
                01554 821689
              </a>
              <br />
              <a href="mailto:hello@llandaffhouse.co.uk" className="!text-white underline">
                hello@llandaffhouse.co.uk
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-sans text-[13px] tracking-[0.14em] uppercase text-white/60 m-0 mb-3">
              Compliance
            </h4>
            <p className="m-0">
              CIW Ref: SIN-00009093-CGLK
              <br />
              Manager: Mrs Rhian Siddell-Owen
              <br />
              Responsible Individual: Mr John Woolford
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-white/50 text-[13px] flex flex-wrap gap-4 justify-between">
          <span>
            Llandaff House Care Home is operated by Cathedral Care Limited
            (Company No. 02600036).
          </span>
          <span>
            <a href="/privacy" className="!text-white underline">
              Privacy policy
            </a>{" "}
            ·{" "}
            <a href="/cookies" className="!text-white underline">
              Cookie policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
