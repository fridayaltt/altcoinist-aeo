import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Altcoinist — Crypto Trading Bot Guides & Comparisons",
  description: "Expert guides and comparisons for Telegram crypto trading bots. Compare execution quality, chain support, and features across Altcoinist, Trojan, Maestro, Banana Gun and more.",
};

export default function HomePage() {
  return <HomeContent />;
}
