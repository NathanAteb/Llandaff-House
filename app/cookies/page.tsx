import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cookie Policy · Llandaff House Care Home",
};

export default function CookiePage() {
  return (
    <>
      <SiteHeader />
      <main className="py-24 max-md:py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <a href="/" className="inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-teal-600 no-underline hover:text-teal-700 mb-6">
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Back to home
          </a>
          <h1>Cookie Policy</h1>
          <p className="text-ink-500 text-[15px] mb-8">Last updated: June 2026</p>

          <h3>What are cookies?</h3>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the site work properly and can provide information
            to the site owner.
          </p>

          <h3>Cookies we use</h3>
          <p>
            This website uses minimal cookies. We do not use advertising or
            tracking cookies.
          </p>

          <table className="w-full border-collapse text-[15px] font-sans mb-6">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="text-left py-2 pr-4 font-semibold">Cookie</th>
                <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                <th className="text-left py-2 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink-100">
                <td className="py-2 pr-4">Essential (Vercel)</td>
                <td className="py-2 pr-4">Required for the website to function and load correctly</td>
                <td className="py-2">Session</td>
              </tr>
              <tr className="border-b border-ink-100">
                <td className="py-2 pr-4">Google Maps</td>
                <td className="py-2 pr-4">Set by the embedded Google Maps iframe on the contact section</td>
                <td className="py-2">Varies</td>
              </tr>
              <tr className="border-b border-ink-100">
                <td className="py-2 pr-4">Google Fonts</td>
                <td className="py-2 pr-4">May be set when loading typefaces from Google&apos;s servers</td>
                <td className="py-2">Varies</td>
              </tr>
            </tbody>
          </table>

          <h3>Managing cookies</h3>
          <p>
            You can control and delete cookies through your browser settings.
            Removing cookies may affect how this website works. For more
            information about cookies and how to manage them, visit{" "}
            <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
          </p>

          <h3>Changes to this policy</h3>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated date.
          </p>

          <h3>Contact</h3>
          <p>
            If you have questions about our use of cookies, please contact us at{" "}
            <a href="mailto:hello@llandaffhouse.co.uk">hello@llandaffhouse.co.uk</a>{" "}
            or ring us on{" "}
            <a href="tel:01554821689">01554 821689</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
