import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://llandaffhouse.co.uk"),
  title: "Llandaff House Care Home · Llangennech, Llanelli",
  description:
    "A safe, comfortable residential and dementia care home in the heart of Llangennech, near Llanelli. 21 single rooms, beautiful garden, kind staff. Caring since 1991.",
  openGraph: {
    title: "Llandaff House Care Home",
    description:
      "Residential and dementia care in Llangennech since 1991.",
    images: ["/photos/patio.jpeg"],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Script
          defer
          data-website-id="dfid_Nc0jpX0RiMgflrx2oEO1G"
          data-domain="llandaffhouse.co.uk"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
