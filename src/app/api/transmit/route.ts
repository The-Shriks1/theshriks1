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
      html: `
        <div style="background-color: #030708; color: #a0b3b8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 60px 20px; width: 100%; box-sizing: border-box;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #060b0d; border: 1px solid #0d1a1c; padding: 40px; text-align: left;">
            <h2 style="color: #ffffff; font-size: 15px; font-weight: 400; letter-spacing: 0.1em; margin: 0 0 30px 0; border-bottom: 1px solid #0d1a1c; padding-bottom: 20px; text-transform: uppercase;">
              Transmission Received
            </h2>
            
            <p style="font-size: 14px; line-height: 1.7; color: #e5e5e5; margin-bottom: 20px;">Dear ${name},</p>
            <p style="font-size: 14px; line-height: 1.7; color: #8a9c9f; margin-bottom: 40px;">${autoReplyMessage}</p>
            
            <div style="background-color: #030506; border: 1px solid #081113; padding: 25px; margin-bottom: 40px;">
              <p style="font-size: 10px; color: #465c60; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 15px 0;">Copy of Message</p>
              <p style="font-size: 13px; color: #6d8487; white-space: pre-wrap; margin: 0; line-height: 1.6; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;">${message}</p>
            </div>
            
            <div style="border-top: 1px solid #0d1a1c; padding-top: 30px;">
              <p style="font-size: 12px; color: #00ffaa; margin: 0; letter-spacing: 0.1em; font-weight: 500;">THE SHRIKS</p>
              <p style="font-size: 11px; color: #3b5054; margin: 8px 0 0 0; letter-spacing: 0.05em;">theshriks.space</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("[TRANSMIT_ERROR]", error);
    const message = error instanceof Error ? error.message : "Failed to send transmission";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
