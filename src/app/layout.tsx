import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://airxpress.com.kh"),
  title: {
    default: "AirXpress Cambodia | Professional Logistics & Delivery Services",
    template: "%s | AirXpress Cambodia",
  },
  description: "AirXpress Cambodia provides reliable, fast, and secure logistics and delivery services across Cambodia. Expert handling for all your shipping needs.",
  keywords: ["Logistics", "Delivery", "Cambodia", "Shipping", "Freight", "AirXpress"],
  authors: [{ name: "AirXpress Cambodia" }],
  creator: "AirXpress Cambodia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "AirXpress Cambodia | Professional Logistics & Delivery Services",
    description: "Reliable, fast, and secure logistics and delivery services across Cambodia.",
    siteName: "AirXpress Cambodia",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to public/
        width: 1200,
        height: 630,
        alt: "AirXpress Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirXpress Cambodia | Professional Logistics & Delivery Services",
    description: "Reliable, fast, and secure logistics and delivery services across Cambodia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <footer className="bg-primary-blue text-white py-6 text-center text-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} AirXpress Cambodia. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
