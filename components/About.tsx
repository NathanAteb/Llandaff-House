import Image from "next/image";
import { Home, Flower2, MapPin, Cat, Users, CalendarHeart } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { Fact } from "./ui/Fact";
import { ReactNode } from "react";

const facts: { icon: ReactNode; title: string; sub: string }[] = [
  { icon: <Home className="w-6 h-6" strokeWidth={1.5} />, title: "21 single rooms", sub: "8 with en-suite" },
  { icon: <Flower2 className="w-6 h-6" strokeWidth={1.5} />, title: "Garden & patio", sub: "Bistro tables in the sun" },
  { icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />, title: "2 minutes from the M4", sub: "Easy to visit, any day" },
  { icon: <Cat className="w-6 h-6" strokeWidth={1.5} />, title: "Own furniture & pets", sub: "Bring what makes home, home" },
  { icon: <Users className="w-6 h-6" strokeWidth={1.5} />, title: "Older persons, 65+", sub: "A quiet, settled community" },
  { icon: <CalendarHeart className="w-6 h-6" strokeWidth={1.5} />, title: "Caring since 1991", sub: "Family-run, Cathedral Care Ltd" },
];

export function About() {
  return (
    <section className="py-24 max-md:py-16" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1.1fr_1fr] max-md:grid-cols-1 gap-16 items-start">
          <div>
            <Eyebrow className="block mb-3">Welcome</Eyebrow>
            <h2 className="mb-3">Truly your home — in a Welsh village we love.</h2>
            <p className="text-[19px]">
              Llandaff House sits in Llangennech, a small village in the Llanelli
              area of Carmarthenshire.
            </p>
            <p className="text-[19px]">
              The village has a lot to offer our residents
              — local shops, a chemist, restaurants, a lively community centre with
              cafe and library, a park with bowling, and the rugby club at the end
              of Mwrwg Road where everyone is always welcome.
            </p>
            <p className="text-[19px]">
              We have both Church and Chapels nearby, and a minister visits
              Llandaff House monthly for services.
            </p>
            <p className="text-[19px]">
              We would like every resident to
              truly think of Llandaff House as their home — and when they are
              coming towards the end of life, to be reassured we will do everything
              we possibly can to maintain their choices, dignity and respect.
            </p>
          </div>
          <div className="rounded-[18px] overflow-hidden bg-cream-200 aspect-[4/5] max-md:aspect-[4/3] relative">
            <Image
              src="/photos/exterior.jpeg"
              alt="The front of Llandaff House on Mwrwg Road, with the teal sign and a blue summer sky."
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {facts.map((f) => (
            <Fact key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
