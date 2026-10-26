import { NextResponse } from "next/server";
import { Resend } from "resend";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asTrimmedString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const name = asTrimmedString(body?.name);
    const email = asTrimmedString(body?.email);
    const message = asTrimmedString(body?.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || name.length > 200 || email.length > 320 || message.length > 5000) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "Message could not be sent." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["kosutimiebinicholas@gmail.com"],
      subject: `New Portfolio Message from ${name.replace(/[\r\n]+/g, " ")}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 12px;">
          <h2 style="font-size: 20px; font-weight: 600; color: #0a0a0a; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #737373; width: 120px;">Sender Name:</td>
              <td style="padding: 6px 0; color: #0a0a0a;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #737373;">Sender Email:</td>
              <td style="padding: 6px 0; color: #0a0a0a;">
                <a href="mailto:${safeEmail}" style="color: #0891b2; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
          </table>
          <div style="background-color: #f4f4f5; padding: 15px; border-radius: 8px; border: 1px solid #e5e5e5;">
            <p style="margin: 0; font-weight: 600; color: #737373; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">
              Message
            </p>
            <p style="margin: 0; color: #0a0a0a; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return NextResponse.json(
        { error: "Message could not be sent." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
