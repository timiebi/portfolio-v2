import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "Server configuration error. Missing API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["kosutimiebinicholas@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 12px;">
          <h2 style="font-size: 20px; font-weight: 600; color: #0a0a0a; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #737373; width: 120px;">Sender Name:</td>
              <td style="padding: 6px 0; color: #0a0a0a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: 600; color: #737373;">Sender Email:</td>
              <td style="padding: 6px 0; color: #0a0a0a;">
                <a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="background-color: #f4f4f5; padding: 15px; border-radius: 8px; border: 1px solid #e5e5e5;">
            <p style="margin: 0; font-weight: 600; color: #737373; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">
              Message
            </p>
            <p style="margin: 0; color: #0a0a0a; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return NextResponse.json(
        { error: emailResponse.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
