import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070D",
        midnight: "#070A12",
        panel: "#090E1A",
        porcelain: "#F4F7FB",
        muted: "#A6AFBF",
        electric: "#4C8DFF",
        cyanSoft: "#70E7FF",
        violetSoft: "#8F6BFF",
      },
      boxShadow: {
        glow: "0 0 70px rgba(76, 141, 255, 0.22)",
        card: "0 24px 70px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
