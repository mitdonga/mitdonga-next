import type { Metadata } from "next";
import { Suspense } from "react";
import { Providers } from "./providers";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Mit Donga - Full Stack Developer & AI Automation Expert",
  description:
    "Mit Donga is a Full Stack Developer and AI Automation Expert. Founder of PitchGen & Automate TG. Building the future with code and AI.",
  authors: [{ name: "Mit Donga" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Mit Donga - Full Stack Developer & AI Automation Expert",
    description:
      "Mit Donga is a Full Stack Developer and AI Automation Expert. Founder of PitchGen & Automate TG. Building the future with code and AI.",
    type: "website",
    siteName: "Mit Donga",
    url: "https://mitdonga.com",
    images: [
      {
        url: "/favicon.png",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Providers>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
