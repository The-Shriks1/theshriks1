import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, channel, intent, message } = body ?? {};

    if (!name || !email || !channel || !intent || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Configure the SMTP transporter using Gmail (since it's a 16-character App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "station@theshriks.space",
        pass: "yghl onab cotb wkvu", // Using the provided app password
      },
    });

    const mailOptions = {
      from: `"The Shriks Transmit" <station@theshriks.space>`,
      to: "station@theshriks.space", // Send the form submission to yourselves
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
