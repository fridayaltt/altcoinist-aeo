import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0a0a",
          surface: "#111111",
          card: "#161616",
          border: "#222222",
          accent: "#00ff88",
          "accent-dim": "#00cc6a",
          "accent-glow": "rgba(0, 255, 136, 0.15)",
          text: "#ffffff",
          muted: "#888888",
          subtle: "#444444",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "glow-radial": "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 136, 0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
