import { Resend } from "resend";
import { NextResponse } from "next/server";
import { buildEnquiryEmail } from "./enquiry-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, role, message, website } = body;

  // Honeypot check
  if (website) {
    console.warn("Honeypot triggered by bot.");
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 }
    );
  }

  const { subject, html } = buildEnquiryEmail({
    name,
    phone,
    email: email || undefined,
    type: role || "Not specified",
    message: message || undefined,
  });

  const { error } = await resend.emails.send({
    from: "Llandaff House <hello@notify.ateb.ai>",
    to: "llandaffhouse@aol.com",
    replyTo: email || undefined,
    subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
