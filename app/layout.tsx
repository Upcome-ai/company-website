import type { Metadata } from "next";
import androidIcon from "@/images/Favicons/Android.png";
import browserIcon from "@/images/Favicons/browser.png";
import iPhoneIcon from "@/images/Favicons/iPhone.png";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Software Product Development Company | Upcome",
  description:
    "Upcome builds AI agents, web platforms, mobile apps, blockchain systems, software products, and cloud infrastructure for startups and companies.",
  openGraph: {
    title: "Build the products of the agentic era.",
    description:
      "Upcome helps startups and companies build AI agents, web platforms, mobile apps, blockchain systems, software products, and cloud infrastructure.",
    url: "https://upcome.ai",
    siteName: "Upcome",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build the products of the agentic era.",
    description:
      "Upcome helps startups and companies build AI agents, web platforms, mobile apps, blockchain systems, software products, and cloud infrastructure.",
  },
  icons: {
    icon: [
      { url: browserIcon.src, sizes: "32x32", type: "image/png" },
      { url: androidIcon.src, sizes: "196x196", type: "image/png" },
    ],
    apple: [{ url: iPhoneIcon.src, sizes: "180x180", type: "image/png" }],
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
