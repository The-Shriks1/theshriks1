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
        <div style="background-color: #000000; color: #e5e5e5; font-family: 'Courier New', Courier, monospace; padding: 40px 20px; width: 100%; box-sizing: border-box;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #1a2a2a; border-top: 4px solid #00ffaa; border-radius: 12px; background-color: #050a0a; padding: 40px; text-align: left; box-shadow: 0 10px 30px rgba(0, 255, 170, 0.05);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #112222; padding-bottom: 20px; margin-bottom: 30px;">
              <div>
                <span style="font-size: 10px; color: #00ffaa; letter-spacing: 3px; text-transform: uppercase;">STATUS: SECURE</span>
                <h2 style="color: #ffffff; letter-spacing: 2px; text-transform: uppercase; font-size: 20px; margin: 10px 0 0 0;">Transmission Received</h2>
              </div>
            </div>
            
            <p style="font-size: 14px; line-height: 1.6; color: #cccccc;">Dear ${name},</p>
            <p style="font-size: 14px; line-height: 1.8; color: #aaaaaa;">${autoReplyMessage}</p>
            
            <div style="margin-top: 40px; padding: 25px; background-color: #020505; border-left: 2px solid #00ffaa; border-radius: 0 8px 8px 0;">
              <p style="font-size: 10px; color: #557777; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 10px;">[ ENCRYPTED LOG COPY ]</p>
              <p style="font-size: 14px; color: #88aaaa; white-space: pre-wrap; margin-bottom: 0; line-height: 1.5;">${message}</p>
            </div>
            
            <div style="margin-top: 50px; border-top: 1px solid #112222; padding-top: 20px; text-align: center;">
              <p style="font-size: 10px; color: #446666; text-transform: uppercase; letter-spacing: 3px; margin: 0;">End of Transmission.</p>
              <p style="font-size: 14px; color: #00ffaa; letter-spacing: 2px; margin-top: 10px; text-transform: uppercase;">The Shriks</p>
            </div>
          </div>
        </div>
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
