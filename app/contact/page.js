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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
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
          {/* Name */}
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

          {/* Email */}
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

          {/* Phone */}
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

          {/* Service Selection */}
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

          {/* Message */}
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

          {/* Submit */}
          <button
            type="submit"
            className="bg-brand text-white py-3 rounded-lg text-lg font-semibold hover:bg-brand-dark transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </main>
  );
}
