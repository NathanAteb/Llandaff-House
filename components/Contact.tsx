"use client";

import { useState, FormEvent } from "react";
import { Phone, MapPin, Mail, CheckCircle, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { Button } from "./ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("cn") as HTMLInputElement).value,
      phone: (form.elements.namedItem("cp") as HTMLInputElement).value,
      email: (form.elements.namedItem("ce") as HTMLInputElement).value,
      role: (form.elements.namedItem("cr") as HTMLSelectElement).value,
      message: (form.elements.namedItem("cm") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="py-24 max-md:py-16" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mb-12">
          <Eyebrow className="block mb-3">Contact</Eyebrow>
          <h2 className="mb-3">We welcome visits — give us a ring.</h2>
          <p className="text-[19px] text-ink-700">
            Pop in any day that suits you. We&apos;d love to show you round, put
            the kettle on, and answer anything that&apos;s on your mind.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1.1fr] max-md:grid-cols-1 gap-16">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-3.5 items-start font-sans text-[17px] text-ink-900 leading-[1.4]">
              <Phone className="w-[22px] h-[22px] text-teal-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <strong className="block font-semibold">01554 821689</strong>
                <small className="text-ink-500">Mrs Rhian Siddell-Owen, Manager</small>
              </div>
            </div>
            <div className="flex gap-3.5 items-start font-sans text-[17px] text-ink-900 leading-[1.4]">
              <MapPin className="w-[22px] h-[22px] text-teal-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                6 Mwrwg Road
                <br />
                Llangennech, Llanelli
                <br />
                SA14 8UA
              </div>
            </div>
            <div className="flex gap-3.5 items-start font-sans text-[17px] text-ink-900 leading-[1.4]">
              <Mail className="w-[22px] h-[22px] text-teal-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <a href="mailto:hello@llandaffhouse.co.uk" className="text-ink-900 no-underline hover:text-teal-600">
                  hello@llandaffhouse.co.uk
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[220px] rounded-[12px] overflow-hidden border border-ink-100">
              <iframe
                src="https://www.google.com/maps?q=Llandaff+House+Care+Home,+6+Mwrwg+Road,+Llangennech,+Llanelli,+SA14+8UA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Llandaff House location on Google Maps"
              />
            </div>
          </div>

          {/* Form */}
          <form
            className="bg-white border border-ink-100 rounded-[18px] p-8 max-md:p-6 grid grid-cols-2 max-md:grid-cols-1 gap-4"
            onSubmit={handleSubmit}
          >
            {!sent && (
              <>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cn" className="font-sans text-[15px] font-semibold text-ink-900">
                    Your name <span className="text-danger ml-0.5">*</span>
                  </label>
                  <input
                    id="cn"
                    type="text"
                    required
                    className="font-sans text-[17px] text-ink-900 bg-white border border-[#D6CDB6] rounded-[8px] px-3.5 py-3 w-full transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cp" className="font-sans text-[15px] font-semibold text-ink-900">
                    Phone <span className="text-danger ml-0.5">*</span>
                  </label>
                  <input
                    id="cp"
                    type="tel"
                    required
                    placeholder="01554 821689"
                    className="font-sans text-[17px] text-ink-900 bg-white border border-[#D6CDB6] rounded-[8px] px-3.5 py-3 w-full transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ce" className="font-sans text-[15px] font-semibold text-ink-900">
                    Email
                  </label>
                  <input
                    id="ce"
                    type="email"
                    placeholder="you@example.co.uk"
                    className="font-sans text-[17px] text-ink-900 bg-white border border-[#D6CDB6] rounded-[8px] px-3.5 py-3 w-full transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cr" className="font-sans text-[15px] font-semibold text-ink-900">
                    You are a…
                  </label>
                  <select
                    id="cr"
                    className="font-sans text-[17px] text-ink-900 bg-white border border-[#D6CDB6] rounded-[8px] px-3.5 py-3 w-full pr-9 appearance-none transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100"
                  >
                    <option>Family member</option>
                    <option>Health professional</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 col-span-full">
                  <label htmlFor="cm" className="font-sans text-[15px] font-semibold text-ink-900">
                    Message
                  </label>
                  <textarea
                    id="cm"
                    placeholder="Tell us a little about your situation — we'll ring you back."
                    className="font-sans text-[17px] text-ink-900 bg-white border border-[#D6CDB6] rounded-[8px] px-3.5 py-3 w-full min-h-[120px] resize-y leading-[1.55] transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100"
                  />
                </div>
              </>
            )}

            {sent && (
              <div className="col-span-full flex items-center gap-2.5 px-6 py-4 bg-teal-50 text-teal-700 border border-teal-200 rounded-[8px] font-sans text-[17px]">
                <CheckCircle className="w-5 h-5 shrink-0" />
                Thank you — we&apos;ll be in touch within one working day.
              </div>
            )}

            {error && (
              <div className="col-span-full flex items-center gap-2.5 px-6 py-4 bg-pink-100 text-danger border border-pink-300 rounded-[8px] font-sans text-[17px]">
                <AlertCircle className="w-5 h-5 shrink-0" />
                Something went wrong — please ring us on 01554 821689 instead.
              </div>
            )}

            {!sent && (
              <div className="col-span-full flex justify-start">
                <Button type="submit" variant="primary" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 className="w-[18px] h-[18px] animate-spin" strokeWidth={1.75} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.75} />
                    </>
                  )}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
