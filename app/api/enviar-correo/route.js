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
      from: 'Formulario Web <noreply@tudominioverificado.com>', // ¡IMPORTANTE! Usa un correo de tu dominio verificado en Resend
      to: ['correo-donde-recibes@tuempresa.com'], // El correo donde quieres recibir la notificación
      subject: `Nuevo mensaje de contacto de: ${name}`,
      html: `
        <h1>Nuevo Mensaje del Formulario de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email del contacto:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Servicio de interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message || 'No proporcionado'}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ message: 'Error al enviar el correo.', error }, { status: 500 });
    }

    console.log({ data });
    return NextResponse.json({ message: 'Correo enviado exitosamente.' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al procesar la solicitud.', error }, { status: 500 });
  }
}