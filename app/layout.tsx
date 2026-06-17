import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainNav from "./components/nav";
import Footer from "./components/Footer";

// Grotesque sans carries everything — body copy and the tight,
// heavily-set display headlines that give the site its engineered feel.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Monospace technical layer: eyebrows, section indices, metrics, and
// any data-like label. Reads like spec sheets and instrument readouts.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://bluehutsolutions.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlueHut Solutions | Engineering Solutions for Critical Infrastructure",
    template: "%s | BlueHut Solutions",
  },
  description:
    "BlueHut Solutions delivers electrical, telecom, and integrated engineering services for residential, commercial, and enterprise clients, safe, reliable, and built to last.",
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
    title: "BlueHut Solutions | Engineering Solutions for Critical Infrastructure",
    description:
      "Electrical, telecom, and integrated engineering services engineered for performance and reliability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueHut Solutions",
    description:
      "Engineering solutions for critical infrastructure, electrical, telecom, and beyond.",
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
      className={`${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-paper text-ink">
        <Providers>
          <MainNav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
