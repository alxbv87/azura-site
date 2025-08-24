import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Incorvia Logo"
            width={160} // Bigger logo
            height={60}
            priority
          />
          {/* Optional text next to logo */}
          <span className="text-2xl font-bold text-brand hidden sm:inline"></span>
        </Link>

        {/* Nav links */}
        <div className="space-x-4 hidden md:flex">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg font-medium text-gray-700 border border-transparent 
                       transition-all duration-300 hover:border-green-600 hover:bg-green-50 
                       hover:text-green-700 shadow-sm hover:shadow-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-lg font-medium text-gray-700 border border-transparent 
                       transition-all duration-300 hover:border-green-600 hover:bg-green-50 
                       hover:text-green-700 shadow-sm hover:shadow-md"
          >
            About
          </Link>
          <Link
            href="/services"
            className="px-4 py-2 rounded-lg font-medium text-gray-700 border border-transparent 
                       transition-all duration-300 hover:border-green-600 hover:bg-green-50 
                       hover:text-green-700 shadow-sm hover:shadow-md"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg font-medium text-gray-700 border border-transparent 
                       transition-all duration-300 hover:border-green-600 hover:bg-green-50 
                       hover:text-green-700 shadow-sm hover:shadow-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
