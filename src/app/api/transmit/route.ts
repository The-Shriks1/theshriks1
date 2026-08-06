import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, channel, intent, message } = body ?? {};

    if (!name || !email || !channel || !intent || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.SMTP_PASSWORD) {
      console.error("[TRANSMIT_ERROR] SMTP_PASSWORD environment variable is missing.");
      return NextResponse.json({ ok: false, error: "Server configuration error" }, { status: 500 });
    }

    // Configure the SMTP transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"The Shriks Transmit" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_USER, // Send the form submission to yourselves
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
  } catch (error) {
    console.error("[TRANSMIT_ERROR]", error);
    return NextResponse.json({ ok: false, error: "Failed to send transmission" }, { status: 500 });
  }
}
