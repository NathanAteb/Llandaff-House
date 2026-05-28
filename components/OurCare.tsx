import { HeartHandshake, Brain, HandHelping } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { ReactNode } from "react";

const cards: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
    title: "Residential care",
    body: "Our residents are supported to maintain as independent a life as they physically, emotionally and mentally can. We adapt our service around them — never the other way round.",
  },
  {
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
    title: "Dementia care",
    body: "We support residents with dementia of varying stages. With joint support from visiting professionals, we also care for Parkinson's, Diabetes, Cancer, heart conditions, arthritis and more.",
  },
  {
    icon: <HandHelping className="w-6 h-6" strokeWidth={1.5} />,
    title: "Equipment & support",
    body: "We have a variety of equipment to support physical challenges — hoists, slide sheets, and Sara Steady — and work closely with visiting health professionals to meet every need.",
  },
];

export function OurCare() {
  return (
    <section className="py-24 max-md:py-16 bg-cream-100" id="care">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mb-12">
          <Eyebrow className="block mb-3">Our care</Eyebrow>
          <h2 className="mb-3">Adapted to each person, every day.</h2>
          <p className="text-[19px] text-ink-700">
            We support residents through change — physical, emotional, cognitive
            — while keeping their independence and identity at the centre of
            everything we do.
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-ink-100 rounded-[12px] shadow-sm p-8 flex flex-col gap-3"
            >
              <span className="w-11 h-11 rounded-[8px] bg-teal-50 text-teal-700 inline-flex items-center justify-center mb-2">
                {c.icon}
              </span>
              <h3 className="font-serif text-[22px] font-medium text-ink-900 m-0">
                {c.title}
              </h3>
              <p className="font-sans text-[17px] text-ink-700 leading-[1.55] m-0">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
