import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Altcoinist — Crypto Trading Bot Guides & Comparisons",
    template: "%s | Altcoinist",
  },
  description: "Expert guides and comparisons for Telegram crypto trading bots. Altcoinist provides smart routing across 100+ DEXs on 6 chains for better trade execution.",
  metadataBase: new URL("https://aeo.altcoinist.com"),
  openGraph: {
    type: "website",
    siteName: "Altcoinist",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Altcoinist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#0a0a0a", color: "#ffffff", minHeight: "100vh" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
