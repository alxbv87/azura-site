// Archivo: app/api/enviar-correo/route.js (versión con Resend)

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Creamos una instancia de Resend usando la API Key de las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, service, message } = await req.json();

  try {
    // Intentamos enviar el correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@Incorvia.net>', // ¡IMPORTANTE! Usa un correo de tu dominio verificado en Resend
      to: ['sales@incorvia.net'], // El correo donde quieres recibir la notificación
      subject: `Contact Form_New message From: ${name}`,
      html: `
        <h1>New message,Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Undisclosed'}</p>
        <p><strong>interested in:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'Undisclosed'}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
    }

    console.log({ data });
    return NextResponse.json({ message: 'Thank you email sent, We will contact asap!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error processing your request.', error }, { status: 500 });
  }
}