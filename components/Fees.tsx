import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { LinkButton } from "./ui/Button";

export function Fees() {
  return (
    <section className="py-24 max-md:py-16" id="fees">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-center">
          <div>
            <Eyebrow className="block">Fees &amp; funding</Eyebrow>
            <h2 className="mt-3">Funding shouldn&apos;t be stressful.</h2>
            <p>
              We know this can feel overwhelming. Whether you&apos;re
              self-funding or exploring local authority support, we&apos;ll
              guide you through it step by step.
            </p>
            <LinkButton variant="primary" href="#contact" className="mt-2">
              <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.75} />
              Talk to us about fees
            </LinkButton>
          </div>
          <Image
            src="/photos/garden.jpeg"
            alt="The garden at Llandaff House Care Home"
            width={600}
            height={400}
            className="rounded-[8px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
