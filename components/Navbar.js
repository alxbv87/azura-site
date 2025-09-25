'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Company" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/team", label: "Our Team" },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 px-6 md:px-10 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Incorvia Logo"
                width={140}
                height={40}
                className="invert"
                priority
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => {
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href} className={`relative font-medium transition-colors ${isActive ? 'text-brand-light' : 'text-brand-muted hover:text-brand-light'}`}>
                            {link.label}
                            {isActive && (
                                <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-brand-accent"></span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="flex items-center">
                <Link href="/contact" className="hidden md:inline-block bg-brand-accent text-brand-dark px-6 py-2.5 rounded-md font-bold text-sm hover:bg-opacity-90 transition duration-300">
                    Schedule Consultation
                </Link>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-brand-light ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                      </svg>
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden mt-4">
                <nav className="flex flex-col items-center space-y-4 py-4">
                     {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="font-medium text-brand-muted hover:text-brand-light transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                     <Link href="/contact" className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-md font-bold text-sm hover:bg-opacity-90 transition duration-300 mt-2" onClick={() => setIsMenuOpen(false)}>
                        Schedule Consultation
                    </Link>
                </nav>
            </div>
        )}
    </header>
  );
}

