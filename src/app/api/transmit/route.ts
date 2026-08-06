import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, channel, intent, message } = body ?? {};

    if (!name || !email || !channel || !intent || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    if (!pass) {
      console.error("[TRANSMIT_ERROR] SMTP password environment variable is missing.");
      return NextResponse.json({ ok: false, error: "Server configuration error" }, { status: 500 });
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER || "station@theshriks.space";
    
    // Configure the SMTP transporter using environment variables or fallback to old service
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"The Shriks Transmit" <${process.env.SMTP_FROM_EMAIL || "station@theshriks.space"}>`,
      to: user, // Send the form submission to yourselves
      replyTo: email, // So you can hit reply and it goes to the submitter
      subject: `[TRANSMISSION] ${intent} - from ${name}`,
      text: `
New transmission received from theshriks.space:

NAME: ${name}
EMAIL: ${email}
CHANNEL: ${channel}
INTENT: ${intent}

MESSAGE:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("[TRANSMIT_ERROR]", error);
    return NextResponse.json({ ok: false, error: error?.message || "Failed to send transmission" }, { status: 500 });
  }
}
