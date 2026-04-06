import type { Metadata } from "next";
import Link from 'next/link';
import Head from 'next/head';
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-poppins-italic-700",
});

export const metadata: Metadata = {
  title: "Prime Sweep Services",
  description: "Professional Street Sweeping & Environmental Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <Head>
          <meta property="og:title" content="Prime Sweep Services" />
          <meta property="og:description" content="Professional Street Sweeping & Environmental Services" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.primesweep.com/" />
          <meta property="og:image" content="https://www.primesweep.com/Images/SweeperTruck1.jpg" />
          <link rel="canonical" href="https://www.primesweep.com/" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Prime Sweep Services',
            description: 'Professional Street Sweeping & Environmental Services',
            url: 'https://www.primesweep.com/',
            image: 'https://www.primesweep.com/Images/SweeperTruck1.jpg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ontario',
              addressRegion: 'CA',
              addressCountry: 'US'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              url: 'https://www.primesweep.com/about#contact'
            }
          }) }} />
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-linear-to-r from-red-50 to-white`}>
          <nav className="w-full bg-red-700 shadow mb-8">
            <div className="max-w-4xl mx-auto flex flex-col mobile-nav-row sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 gap-2 sm:gap-0">
              <div className="mobile-brand">
                <Link href="/" className="text-white font-bold text-2xl tracking-wide font-poppins-italic-700 text-center sm:text-left">Prime Sweeping Services</Link>
                <div className="flex mobile-nav-links sm:hidden gap-2 items-center justify-center mt-2">
                  <Link href="/" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition text-center">Home</Link>
                  <Link href="/about" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition text-center">About</Link>
                  <Link href="/gallery" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition text-center">Gallery</Link>
                  <Link href="/about#contact" className="text-white font-semibold text-base px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-300 hover:text-red-700 transition text-center">Quote</Link>
                </div>
              </div>
              <div className="hidden sm:flex flex-row gap-8 items-center justify-center">
                <Link href="/" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition w-full sm:w-auto text-center">Home</Link>
                <Link href="/about" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition w-full sm:w-auto text-center">About</Link>
                <Link href="/gallery" className="text-white font-medium text-base px-4 py-2 rounded hover:bg-gray-100 hover:text-red-700 transition w-full sm:w-auto text-center">Gallery</Link>
                <Link href="/about#contact" className="text-white font-semibold text-base px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-300 hover:text-red-700 transition w-full sm:w-auto text-center">Quote</Link>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
  );
}
