import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Lato } from 'next/font/google';

// Setup the fonts with correct weights and subsets
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair', // CSS variable for display font
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato', // CSS variable for sans-serif font
});

export const metadata = {
  title: "Incorvia | Business Incorporation in Costa Rica",
  description: "Expert guidance for seamless company incorporation and strategic growth in one of Latin America's most vibrant economies.",
};

export default function RootLayout({ children }) {
  return (
    // Apply font variables to the html tag for global access
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      {/* Set the base font on the body */}
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

