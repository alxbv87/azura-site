import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Incorvia</h3>
          <p className="text-gray-100">
            Helping businesses incorporate quickly and securely in Costa Rica
            and worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-brand-light">Home</Link></li>
            <li><Link href="/services" className="hover:text-brand-light">Services</Link></li>
            <li><Link href="/about" className="hover:text-brand-light">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="hover:text-brand-light">
              <Facebook size={24} />
            </a>
            <a href="#" target="_blank" className="hover:text-brand-light">
              <Twitter size={24} />
            </a>
            <a href="#" target="_blank" className="hover:text-brand-light">
              <Linkedin size={24} />
            </a>
            <a href="#" target="_blank" className="hover:text-brand-light">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-200 text-sm">
        © {new Date().getFullYear()} Incorvia. All rights reserved.
      </div>
    </footer>
  );
}
