import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force Node runtime and avoid static caching
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mask(value = "") {
  if (!value) return "MISSING";
  // show first 2 chars only
  return value.slice(0, 2) + "***";
}

export async function POST(req) {
  console.log("[/api/newsletter] POST hit");

  try {
    const body = await req.json().catch(() => ({}));
    const email = body?.email;
    console.log("[/api/newsletter] payload:", body);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      console.error("[/api/newsletter] Invalid email:", email);
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const user = process.env.NEWSLETTER_SMTP_USER;
    const pass = process.env.NEWSLETTER_SMTP_PASS;

    console.log("[/api/newsletter] ENV check:", {
      NEWSLETTER_SMTP_USER: mask(user),
      NEWSLETTER_SMTP_PASS: pass ? "SET" : "MISSING",
      NODE_ENV: process.env.NODE_ENV,
    });

    if (!user || !pass) {
      return NextResponse.json(
        { ok: false, error: "SMTP env not configured" },
        { status: 500 }
      );
    }

    // More explicit Gmail config + debug
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      logger: true,
      debug: true,  
    });

    // Verify SMTP first
    try {
      console.log("[/api/newsletter] Verifying transporter...");
      await transporter.verify();
      console.log("[/api/newsletter] Transporter verified");
    } catch (vErr) {
      console.error("[/api/newsletter] Transporter verify failed:", vErr);
      return NextResponse.json(
        { ok: false, error: "SMTP verify failed", details: vErr?.message || String(vErr) },
        { status: 500 }
      );
    }

    console.log("[/api/newsletter] Sending mail…");
    const info = await transporter.sendMail({
      from: `"TubSense Newsletter" <${user}>`,
      to: "tubsense25@gmail.com",
      subject: "New Newsletter Signup",
      text: `New subscriber: ${email}`,
      html: `<p><b>New subscriber:</b> ${email}</p>`,
    });

    console.log("[/api/newsletter] Mail sent:", {
      messageId: info?.messageId,
      accepted: info?.accepted,
      rejected: info?.rejected,
      response: info?.response,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // surface more detail for debugging
    console.error("[/api/newsletter] Uncaught error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Server error",
        details: err?.message || String(err),
        code: err?.code || null,
        response: err?.response || null,
        command: err?.command || null,
      },
      { status: 500 }
    );
  }
}
