// Archivo: page.js (versión actualizada)

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Nuevo estado para manejar el feedback al usuario
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ----- FUNCIÓN MODIFICADA -----
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('sending'); // Empezamos el envío

    try {
      const response = await fetch('/api/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue exitosa.');
      }

      // Si todo sale bien
      setSubmissionStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-brand mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Have questions or need help with incorporation? Fill out the form below
          and our team will get in touch.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Inputs del formulario (sin cambios) */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Type of Service Needed
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none"
            >
              <option value="">-- Select a Service --</option>
              <option value="company-formation">Company Formation</option>
              <option value="legal-compliance">Legal Compliance</option>
              <option value="accounting">Accounting & Tax</option>
              <option value="registered-office">Registered Office Address</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none"
            ></textarea>
          </div>

          {/* ----- BOTÓN Y MENSAJES DE ESTADO ----- */}
          <button
            type="submit"
            disabled={submissionStatus === 'sending'} // Deshabilitamos el botón mientras se envía
            className="bg-brand text-white py-3 rounded-lg text-lg font-semibold hover:bg-brand-dark transition disabled:bg-gray-400"
          >
            {submissionStatus === 'sending' ? 'Sending...' : 'Submit Inquiry'}
          </button>

          {/* Mensajes de éxito o error */}
          {submissionStatus === 'success' && (
            <p className="text-green-600 text-center">Thank you for your message! We will get back to you shortly.</p>
          )}
          {submissionStatus === 'error' && (
            <p className="text-red-600 text-center">Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>
    </main>
  );
}