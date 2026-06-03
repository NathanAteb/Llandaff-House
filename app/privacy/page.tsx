import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy · Llandaff House Care Home",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-24 max-md:py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <a href="/" className="inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-teal-600 no-underline hover:text-teal-700 mb-6">
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Back to home
          </a>
          <h1>Privacy Policy</h1>
          <p className="text-ink-500 text-[15px] mb-8">Last updated: June 2026</p>

          <h3>Who we are</h3>
          <p>
            Llandaff House Care Home is operated by Cathedral Care Limited
            (Company No. 02600036). Our registered address is 6 Mwrwg Road,
            Llangennech, Llanelli, SA14 8UA. We are the data controller for the
            personal information we collect through this website.
          </p>

          <h3>What we collect</h3>
          <p>When you use our contact form, we collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address (if provided)</li>
            <li>Your message and how you describe yourself (e.g. family member, health professional)</li>
          </ul>

          <h3>How we use your information</h3>
          <p>
            We use the information you provide solely to respond to your enquiry
            about our care services. We will not use your details for marketing
            purposes unless you explicitly ask us to keep you updated.
          </p>

          <h3>How we store your information</h3>
          <p>
            Enquiries submitted through the website are delivered to our email
            inbox. We retain enquiry details for as long as needed to respond to
            your query and for a reasonable period afterwards in case of
            follow-up. We do not sell or share your personal information with
            third parties, except where required by law.
          </p>

          <h3>Your rights</h3>
          <p>Under UK data protection law (UK GDPR), you have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Request a copy of the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict how we process your data</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:llandaffhouse@aol.com">llandaffhouse@aol.com</a>{" "}
            or ring us on{" "}
            <a href="tel:01554821689">01554 821689</a>.
          </p>

          <h3>Third-party services</h3>
          <p>This website uses the following third-party services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Google Fonts</strong> — to display typefaces. Google may collect anonymised usage data.</li>
            <li><strong>Google Maps</strong> — embedded on the contact section to show our location.</li>
            <li><strong>Resend</strong> — to deliver contact form submissions to our email inbox.</li>
            <li><strong>Vercel</strong> — to host this website.</li>
          </ul>

          <h3>Complaints</h3>
          <p>
            If you have concerns about how we handle your personal data, you can
            contact the Information Commissioner&apos;s Office (ICO) at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
