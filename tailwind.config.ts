import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B33",
        navy: "#173256",
        "navy-2": "#1E3C68",
        "navy-line": "#243f6b",
        bone: "#F2EDE2",
        "bone-dim": "#D9D2C2",
        muted: "#8FA2C2",
        "muted-2": "#5C6F8E",
        mint: "#5BE3C8",
        "mint-deep": "#1FB89A",
        amber: "#E6B16A",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Times New Roman"', "serif"],
        sans: [
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          '"SFMono-Regular"',
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        "rad-sm": "6px",
        rad: "14px",
        "rad-lg": "22px",
      },
      maxWidth: {
        page: "1320px",
      },
      animation: {
        blink: "blink 1.1s infinite",
        pulse2: "pulse2 1.6s infinite",
        marquee: "marquee 64s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
