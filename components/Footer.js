import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B263B] text-[#F7F9FB] mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-display">INCORVIA</h2>
            <p className="mt-4 text-[#B0BEC5] max-w-sm">
              Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#F7F9FB]">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#B0BEC5] hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#B0BEC5] hover:text-[#D4AF37] transition-colors">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#B0BEC5] hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B0BEC5] hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#F7F9FB]">Contact</h3>
            <ul className="space-y-3 text-[#B0BEC5]">
              <li>Avenida Escazú, San José, Costa Rica</li>
              <li>+506 2208-8888</li>
              <li>contact@incorvia.cr</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#2E3B4E] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#B0BEC5]">
          <p>&copy; {new Date().getFullYear()} Incorvia. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61581075455757" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/incorviacr?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/incorvia-ltd-3aa098384/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/incorvia.cr?igsh=c3RqZ2cweWRpZDV2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
