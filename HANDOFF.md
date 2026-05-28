# HANDOFF — Llandaff House → Next.js

A practical, step-by-step handoff for turning this design system into a deployable Next.js site. Aimed at one developer, half a day's work to production.

Stack assumed: **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Vercel**. If you prefer plain CSS Modules or a different host, the token mapping below still applies — only the Tailwind config section is framework-specific.

---

## 1. What you're starting from

This repo (the skill bundle) contains:

| Path | What it is | Where it goes in Next.js |
| --- | --- | --- |
| `README.md` | Brand voice, visual foundations, iconography rules. | **Read first.** Then keep as `docs/BRAND.md`. |
| `colors_and_type.css` | All design tokens (CSS variables) + semantic element defaults. | `app/globals.css` (copy verbatim, then layer Tailwind on top). |
| `kit.css` | Component styles (buttons, cards, header, form, etc). | Optional. Port to Tailwind classes OR keep as `app/components.css`. |
| `ui_kits/website/index.html` | The full reference site — every section already built. | **Use as the visual source of truth.** Port section-by-section to React. |
| `assets/photos/*.jpeg` | The six real photographs. | `public/photos/`. Convert to `.webp` with a build step (see §5). |
| `SKILL.md` | Skill manifest for Claude Code. | Keep at repo root if you want Claude Code to use this skill on the codebase. |

---

## 2. Create the project

```bash
npx create-next-app@latest llandaff-house \
  --typescript --tailwind --app --eslint --src-dir=false --import-alias="@/*"
cd llandaff-house
```

Add the icon library and an email sender:

```bash
npm i lucide-react resend
npm i -D @types/node
```

---

## 3. Wire the design tokens

### `app/globals.css`

Paste the **entire contents** of `colors_and_type.css` from this bundle into the top of `app/globals.css`, **above** the `@tailwind` directives:

```css
/* paste colors_and_type.css here */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

The `@import` for Google Fonts at the top of `colors_and_type.css` works fine, but the more performant move is `next/font`:

```ts
// app/layout.tsx
import { Lora, Inter } from "next/font/google";
const lora  = Lora({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-serif-next" });
const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-sans-next" });
```

…then in `globals.css` swap the `--font-serif` / `--font-sans` definitions to point at `var(--font-serif-next)` / `var(--font-sans-next)`. Delete the `@import` line.

### `tailwind.config.ts`

Mirror the tokens so you can write `bg-teal-300`, `text-ink-900`, etc:

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { 50:"#EAF4F0", 100:"#CFE5DD", 200:"#A8D2C5", 300:"#7FB8AB", 400:"#5FA294", 500:"#3E8576", 600:"#2F6B5E", 700:"#234F45", 800:"#18372F" },
        sage: { 100:"#E8EFE6", 300:"#B7C9A8" },
        pink: { 100:"#F4E7E2", 300:"#D8B3A8" },
        cream:{ 50:"#FFFFFF", 100:"#F4F7F6", 200:"#E6ECEA" },
        bone: "#FFFFFF",
        ink:  { 100:"#E2E7E6", 300:"#A8B1AF", 500:"#6B7775", 700:"#3E4A48", 900:"#1F2A28" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)",  "Inter", "sans-serif"],
      },
      fontSize: {
        base: ["17px", { lineHeight: "1.55" }],
        lg:   ["19px", { lineHeight: "1.55" }],
        xl:   ["22px", { lineHeight: "1.3" }],
        "2xl":["27px", { lineHeight: "1.15" }],
        "3xl":["34px", { lineHeight: "1.15" }],
        "4xl":["42px", { lineHeight: "1.15" }],
        "5xl":["54px", { lineHeight: "1.06" }],
      },
      borderRadius: { sm:"8px", md:"12px", lg:"18px", xl:"28px" },
      boxShadow: {
        xs: "0 1px 2px rgba(31,42,40,0.05)",
        sm: "0 2px 8px rgba(31,42,40,0.06), 0 1px 2px rgba(31,42,40,0.04)",
        md: "0 8px 22px rgba(31,42,40,0.08), 0 2px 4px rgba(31,42,40,0.04)",
        lg: "0 20px 44px rgba(31,42,40,0.10), 0 4px 8px rgba(31,42,40,0.05)",
      },
      maxWidth: { container: "1200px", narrow: "800px" },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 4. Component breakdown

Port `ui_kits/website/index.html` section-by-section. Suggested file layout:

```
app/
  layout.tsx
  page.tsx                 ← composes the sections
  globals.css
  api/
    contact/route.ts       ← form submission (Resend)
components/
  SiteHeader.tsx
  SiteFooter.tsx
  Wordmark.tsx
  Hero.tsx
  About.tsx                ← welcome + facts grid
  OurCare.tsx              ← 3 feature cards
  LifeWithUs.tsx           ← photo collage + quote + highlights
  CIWInspection.tsx
  Fees.tsx
  AnnualReturn.tsx
  Contact.tsx              ← form + info + map
  ui/
    Button.tsx             ← btn--primary / btn--secondary / btn--ghost variants
    Card.tsx
    Fact.tsx
    Field.tsx              ← label + input/select/textarea
```

Every component should:
- Use semantic HTML (`<section>`, `<nav>`, `<address>`, `<blockquote>`).
- Import icons individually: `import { Phone, MapPin } from "lucide-react"`.
- Stay inside the token vocabulary (`bg-teal-600`, `text-ink-900`) — never inline arbitrary hex.

Skeleton example for the most-reused component:

```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

export function Button({ variant = "primary", className, children, ...rest }:
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex items-center gap-2.5 rounded-md font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-teal-600",
        variant === "primary"   && "bg-teal-600 text-white px-5 py-3.5 hover:bg-teal-700",
        variant === "secondary" && "border border-teal-600 text-teal-700 px-5 py-3.5 hover:bg-teal-50",
        variant === "ghost"     && "text-ink-900 px-3.5 py-2.5 hover:text-teal-700",
        className,
      )}
    >
      {children}
    </button>
  );
}
```

---

## 5. Images

1. Put the six photos in `public/photos/` with the names already used (`exterior.jpeg`, `patio.jpeg`, etc).
2. Replace every `<img>` with `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/photos/patio.jpeg"
  alt="The patio with bistro tables in the afternoon sun."
  fill
  priority                             // hero only
  sizes="100vw"
  className="object-cover"
/>
```

3. Run them through a one-time conversion: `npx @squoosh/cli --webp '{"quality":82}' public/photos/*.jpeg`. Commit both `.jpeg` and `.webp`; Next will pick the modern format automatically when configured with `images: { formats: ['image/webp'] }` in `next.config.js`.

Target weights: hero ~120–160KB, others <80KB.

---

## 6. Contact form

### `app/api/contact/route.ts`

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const TO     = process.env.CONTACT_TO_EMAIL ?? "hello@llandaffhouse.co.uk";

export async function POST(req: Request) {
  const { name, phone, email, relationship, message } = await req.json();
  if (!name || !phone) return NextResponse.json({ error: "Name and phone required" }, { status: 400 });

  await resend.emails.send({
    from: "Llandaff House Website <noreply@llandaffhouse.co.uk>",
    to: TO,
    replyTo: email || undefined,
    subject: `Enquiry from ${name} (${relationship})`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `Relationship: ${relationship}`,
      ``,
      message || "(no message)",
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
```

Env vars on Vercel:
```
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=manager@llandaffhouse.co.uk
```

Client side: keep the same form markup; in the React component, intercept `onSubmit`, `POST /api/contact`, swap the form for the success toast.

Add a honeypot field (a hidden `<input name="website">`) and reject submissions where it's non-empty — kills 90% of spam without a captcha.

---

## 7. The map

Use the iframe embed from Google Maps (no API key needed for a basic embed):

```tsx
<iframe
  title="Llandaff House on the map"
  src="https://www.google.com/maps?q=6+Mwrwg+Road,+Llangennech,+SA14+8UA&output=embed"
  className="w-full h-[260px] rounded-md border border-ink-100"
  loading="lazy"
/>
```

Replace the CSS-placeholder block in `Contact.tsx`.

---

## 8. Annual return

Upload the PDF to `public/docs/annual-return-2025-26.pdf`. The doc card becomes:

```tsx
<a href="/docs/annual-return-2025-26.pdf" download>...</a>
```

Each year, swap the PDF file (and rename the link) — that's the whole update process.

---

## 9. SEO / metadata

```ts
// app/layout.tsx
export const metadata = {
  title: "Llandaff House Care Home · Llangennech, Llanelli",
  description: "A safe, comfortable residential and dementia care home in the heart of Llangennech, near Llanelli. 21 single rooms, beautiful garden, kind staff. Caring since 1991.",
  metadataBase: new URL("https://llandaffhouse.co.uk"),
  openGraph: {
    title: "Llandaff House Care Home",
    description: "Residential and dementia care in Llangennech since 1991.",
    images: ["/photos/patio.jpeg"],
    locale: "en_GB",
    type: "website",
  },
  alternates: { canonical: "/" },
};
```

Add **`LocalBusiness` JSON-LD** in `app/page.tsx`:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
  parentOrganization: { "@type": "Organization", name: "Cathedral Care Limited" },
  identifier: "SIN-00009093-CGLK",
})}}/>
```

---

## 10. Accessibility checklist (non-negotiable)

- Body never below 17px (already enforced via `text-base`).
- All photos have descriptive `alt` text — write in the operator's own voice, not generic ("The conservatory in afternoon sun", not "Care home interior").
- Focus rings visible on every interactive element (`focus-visible:outline-2 outline-teal-600`).
- Phone numbers wrapped in `<a href="tel:...">`.
- Email wrapped in `<a href="mailto:...">`.
- Sticky header uses `scroll-padding-top` so anchor links land correctly.
- Run Lighthouse before launch — target 95+ on every category.

---

## 11. Deploy

```bash
git init && git add . && git commit -m "Initial"
gh repo create llandaff-house --private --source=. --push
```

Connect the repo to Vercel, add the two env vars, deploy. DNS: point the apex and `www.` records at Vercel (operator's domain registrar will provide the CNAME / A records Vercel asks for).

---

## 12. What I'd hand back to the operator after launch

A one-page maintenance README explaining:

- How to update the annual return (drop a new PDF into `public/docs/`, rename the link).
- How to update fees (edit `FEES = [...]` in `components/Fees.tsx`).
- How to swap a photo (replace the file in `public/photos/`, keep the filename).
- How to add a CIW quote each inspection (edit `components/CIWInspection.tsx`).
- Who to call when something breaks.

That's it. The site is intentionally small — that's the point. Stay close to the design system, resist adding sections, and it'll look right for years.

---

## 13. Things to clarify with the operator before going live

- [ ] Confirm email address(es) enquiries should go to.
- [ ] Confirm working hours / when families can expect a reply.
- [ ] Cookie banner needed? (Probably not — site is static and runs no third-party tracking by default. If Google Maps embed counts under the operator's interpretation of PECR, add a minimal banner.)
- [ ] Privacy policy + cookie policy copy — currently `href="#"` placeholders in the footer.
- [ ] Logo file — currently a CSS-rebuilt wordmark from the existing acrylic sign. If the operator wants a "real" logo, commission one and drop it in.
- [ ] Welsh language version? CIW publishes bilingual material; the operator may want at least a Welsh "Welcome" header.

If any of those are blockers, surface them early. Everything else can ship on the MVP.
