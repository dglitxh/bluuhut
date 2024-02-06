import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "BlueHut Solutions",
  description: "Hassle free solutions at your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={""}>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
