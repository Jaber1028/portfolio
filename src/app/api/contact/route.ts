import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

// This is a server component - it will never run on the client
export async function POST(request: Request) {
  console.log('Contact API called');
  try {
    const data = await request.json();
    const { name, email, subject, message, token } = data;

    // Validate the request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token (skip if not configured)
    if (token) {
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      if (!secret) {
        console.warn('reCAPTCHA secret not configured, skipping verification');
      } else {
        // Verify token with Google
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${secret}&response=${token}`,
        });
        const verifyData = await verifyRes.json();
        console.log('reCAPTCHA verify response:', verifyData);
        if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
          return NextResponse.json(
            { error: 'Captcha verification failed. Please try again.' },
            { status: 400 }
          );
        }
      }
    } else {
      console.warn('reCAPTCHA token not provided, skipping verification');
    }

    const transport: SMTPTransport.Options = {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    };

    const transporter = nodemailer.createTransport(transport);

    // Send the email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 