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

    const adminMailOptions = {
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

    // Determine the template for the auto-reply based on the category
    let autoReplyMessage = "Your transmission has been secured. We will review your message and get back to you shortly.";
    switch (channel.toLowerCase()) {
      case "investment":
        autoReplyMessage = "Thank you for your interest in investment opportunities. We have secured your transmission and our team will review your proposal shortly.";
        break;
      case "press":
        autoReplyMessage = "Thank you for reaching out to our press team. Your inquiry has been received and we will be in touch as soon as possible.";
        break;
      case "collaboration":
        autoReplyMessage = "Thank you for your interest in collaborating. We have received your transmission and will review it carefully.";
        break;
      case "engagement":
        autoReplyMessage = "Thank you for engaging with The Shriks. Your transmission is secured and we will respond shortly.";
        break;
    }

    const autoReplyOptions = {
      from: `"The Shriks" <${process.env.SMTP_FROM_EMAIL || "station@theshriks.space"}>`,
      to: email, // Send back to the person who filled out the form
      subject: `Transmission Received: ${intent}`,
      text: `
Dear ${name},

${autoReplyMessage}

Here is a copy of your message:
-------------------------------------------------
${message}
-------------------------------------------------

End of Transmission.
The Shriks
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("[TRANSMIT_ERROR]", error);
    return NextResponse.json({ ok: false, error: error?.message || "Failed to send transmission" }, { status: 500 });
  }
}
