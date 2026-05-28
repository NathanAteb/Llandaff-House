import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OurCare } from "@/components/OurCare";
import { LifeWithUs } from "@/components/LifeWithUs";
import { CIWInspection } from "@/components/CIWInspection";
import { Fees } from "@/components/Fees";
import { AnnualReturn } from "@/components/AnnualReturn";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NursingHome",
  name: "Llandaff House Care Home",
  telephone: "+44 1554 821689",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Mwrwg Road",
    addressLocality: "Llangennech",
    addressRegion: "Carmarthenshire",
    postalCode: "SA14 8UA",
    addressCountry: "GB",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Cathedral Care Limited",
  },
  identifier: "SIN-00009093-CGLK",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <Hero />
      <About />
      <OurCare />
      <LifeWithUs />
      <CIWInspection />
      <Fees />
      <AnnualReturn />
      <Contact />
      <SiteFooter />
    </>
  );
}
