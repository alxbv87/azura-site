// Archivo: app/api/enviar-correo/route.js (versión con plantilla HTML)

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, service, message } = await req.json();

  // --- HTML Email Template ---
  // We build the HTML string here using template literals
  const emailHtml = `
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #dddddd;">
          <img src="https://www.incorvia.net/logo.png" alt="Incorvia Logo" style="max-width: 150px;">
        </div>

        <div style="padding: 20px 0;">
          <h1 style="color: #333333; text-align: center;">New Contact Form Submission</h1>
          <p style="color: #555555;">You have received a new message from your website's contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; color: #333333; font-weight: bold;">Full Name:</td>
              <td style="padding: 10px; color: #555555;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; color: #333333; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px; color: #555555;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; color: #333333; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px; color: #555555;">${phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px; color: #333333; font-weight: bold;">Service of Interest:</td>
              <td style="padding: 10px; color: #555555;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; color: #333333; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #555555;">${message || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #dddddd; font-size: 12px; color: #999999;">
          <p>This email was sent from the contact form on incorvia.net</p>
        </div>

      </div>
    </body>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@incorvia.net>',
      to: ['sales@incorvia.net'], // <-- IMPORTANT: Change this to your actual receiving email address
      subject: `New message from: ${name}`,
      html: emailHtml, // We use the new HTML template here
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
    }

    console.log({ data });
    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error processing request.', error }, { status: 500 });
  }
}