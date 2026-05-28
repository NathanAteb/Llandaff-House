import Image from "next/image";
import {
  Brush,
  Scissors,
  Footprints,
  Church,
  CalendarHeart,
  Utensils,
} from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { ReactNode } from "react";

const highlights: { icon: ReactNode; text: string }[] = [
  { icon: <Brush className="w-5 h-5" strokeWidth={2} />, text: "Weekly spa day · every Tuesday" },
  { icon: <Scissors className="w-5 h-5" strokeWidth={2} />, text: "Hairdresser visits weekly" },
  { icon: <Footprints className="w-5 h-5" strokeWidth={2} />, text: "Chiropodist every 6\u20138 weeks" },
  { icon: <Church className="w-5 h-5" strokeWidth={2} />, text: "Monthly minister services" },
  { icon: <CalendarHeart className="w-5 h-5" strokeWidth={2} />, text: "Daily activities programme" },
  { icon: <Utensils className="w-5 h-5" strokeWidth={2} />, text: "Freshly prepared meals by our chef" },
];

export function LifeWithUs() {
  return (
    <section className="py-24 max-md:py-16" id="life">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mb-12">
          <Eyebrow className="block mb-3">Life with us</Eyebrow>
          <h2 className="mb-3">
            Spa days on Tuesday, a chef in the kitchen, a garden in the sun.
          </h2>
        </div>

        <div className="grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 gap-16 items-center">
          {/* Photo collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-square">
            <div className="row-span-2 rounded-[18px] overflow-hidden bg-cream-200 relative">
              <Image
                src="/photos/conservatory.jpeg"
                alt="The conservatory in afternoon sun, with the dining table set and garden visible through the doors."
                fill
                sizes="(max-width: 860px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-[18px] overflow-hidden bg-cream-200 relative">
              <Image
                src="/photos/lounge.jpeg"
                alt="The main lounge, with sage and dusky-pink wingback chairs arranged around the TV."
                fill
                sizes="(max-width: 860px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-[18px] overflow-hidden bg-cream-200 relative">
              <Image
                src="/photos/bedroom.jpeg"
                alt="A single bedroom with sage-green walls, floral bedding and a window looking out to the garden."
                fill
                sizes="(max-width: 860px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <blockquote className="!mt-0">
              Our Activities Co-ordinator plans a monthly programme of activities
              and events — reminiscence groups (especially rewarding for
              residents with dementia), art, cooking, quizzes, games and puzzles,
              spa days, and visiting entertainers.
            </blockquote>
            <p>
              Our hairdresser visits every Tuesday as part of our weekly spa day,
              and our activities co-ordinator ensures residents are pampered with
              foot spas, manicures and make-up for those who&apos;d like to take
              part. A chiropodist visits every 6–8 weeks.
            </p>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-12 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 gap-x-8 p-8 bg-white border border-ink-100 rounded-[12px]">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="flex items-start gap-3 font-sans text-[17px] text-ink-900 leading-[1.4]"
            >
              <span className="shrink-0 text-teal-600 mt-0.5">{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
