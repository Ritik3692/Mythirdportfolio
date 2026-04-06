import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // --- Email Template for Admin (You) ---
        const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="background-color: #121212; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">New Portfolio Inquiry</h2>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px; color: #555; margin-bottom: 10px;"><strong>Message:</strong></p>
          <blockquote style="background-color: #f9f9f9; border-left: 4px solid #007bff; padding: 15px; margin: 0; font-style: italic; color: #555;">
            ${message}
          </blockquote>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
          <p>Sent from your Portfolio Contact Form</p>
        </div>
      </div>
    `;

        // --- Email Template for User (Auto-reply) ---
        const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px;">
        <div style="background-color: #121212; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Ritik Kashyap</h2>
          <p style="color: #888; margin: 5px 0 0;">Full Stack Developer</p>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h3 style="color: #333; margin-top: 0;">Hi ${name},</h3>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            Thank you for reaching out! I have received your message and will get back to you as soon as possible.
          </p>
          <div style="background-color: #f0f7ff; border: 1px solid #cce5ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #004085; font-size: 14px;"><strong>Your Message:</strong></p>
            <p style="margin: 5px 0 0; color: #004085; font-style: italic;">"${message}"</p>
          </div>
          <p style="font-size: 16px; color: #555;">Best regards,<br><strong>Ritik Kashyap</strong></p>
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://linkedin.com/in/ritik-kashyap-0a7178248/" style="color: #121212; text-decoration: none; margin: 0 10px; font-weight: bold;">LinkedIn</a>
            <a href="https://github.com/Ritik3692" style="color: #121212; text-decoration: none; margin: 0 10px; font-weight: bold;">GitHub</a>
          </div>
        </div>
      </div>
    `;

        // Send Admin Email
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Portfolio: New Inquiry from ${name}`,
            text: message,
            html: adminHtml,
        });

        // Send User Auto-reply
        await transporter.sendMail({
            from: `"Ritik Kashyap" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thank you for contacting me!`,
            text: "Thanks for your message. I will get back to you soon.",
            html: userHtml,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
