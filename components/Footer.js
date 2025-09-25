import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-20">
         <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold font-display text-brand-light">
                        INCORVIA
                    </Link>
                    <p className="mt-4 text-brand-muted max-w-sm">Your strategic partners for navigating the complexities of company formation and achieving ambitious growth in Costa Rica.</p>
                </div>
                 <div>
                    <h3 className="text-lg font-bold text-brand-light mb-4">Navigate</h3>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-brand-muted hover:text-brand-light transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-brand-muted hover:text-brand-light transition-colors">Our Company</Link></li>
                        <li><Link href="/services" className="text-brand-muted hover:text-brand-light transition-colors">Services</Link></li>
                        <li><Link href="/contact" className="text-brand-muted hover:text-brand-light transition-colors">Contact</Link></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-bold text-brand-light mb-4">Contact</h3>
                    <ul className="space-y-3 text-brand-muted">
                        <li>Avenida Escazú, San José, Costa Rica</li>
                        <li>+506 2208-8888</li>
                        <li>contact@incorvia.cr</li>
                    </ul>
                </div>
            </div>
             <div className="mt-16 border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-brand-muted">
                <p>&copy; {new Date().getFullYear()} Incorvia. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="https://www.facebook.com/profile.php?id=61581075455757" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="https://x.com/incorviacr?s=11" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/incorvia-ltd-3aa098384/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/incorvia.cr?igsh=c3RqZ2cweWRpZDV2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                      <Instagram size={20} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

