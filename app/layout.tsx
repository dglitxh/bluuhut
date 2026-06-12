import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Editorial serif used for display headlines — gives the site the
// authoritative, print-led feel of an established engineering firm.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://bluehutsolutions.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlueHut Solutions — Engineering Solutions for Critical Infrastructure",
    template: "%s | BlueHut Solutions",
  },
  description:
    "BlueHut Solutions delivers electrical, telecom, and integrated engineering services for residential, commercial, and enterprise clients — safe, reliable, and built to last.",
  keywords: [
    "engineering solutions",
    "electrical services",
    "telecom infrastructure",
    "network deployment",
    "facility maintenance",
    "BlueHut Solutions",
  ],
  authors: [{ name: "BlueHut Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "BlueHut Solutions",
    title: "BlueHut Solutions — Engineering Solutions for Critical Infrastructure",
    description:
      "Electrical, telecom, and integrated engineering services engineered for performance and reliability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueHut Solutions",
    description:
      "Engineering solutions for critical infrastructure — electrical, telecom, and beyond.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
