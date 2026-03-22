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
  title: "Kushagra Singh | Web3 Growth & Product Leader",
  description:
    "Zero-to-one builder with 10+ years in crypto. $3B+ volume, 10M+ users acquired, 50+ hackathons organized. Currently leading Okto at CoinDCX.",
  openGraph: {
    title: "Kushagra Singh | Web3 Growth & Product Leader",
    description:
      "Zero-to-one builder with 10+ years in crypto. $3B+ volume, 10M+ users acquired.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
