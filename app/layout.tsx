import type { Metadata } from "next";
import { Suspense } from "react";
import { Providers } from "./providers";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Full Stack Developer & AI Automation Expert | Portfolio",
  description:
    "Full Stack Developer and AI Automation Expert. Founder of PitchGen & Automate TG. Building the future with code and AI. Available for freelance projects.",
  authors: [{ name: "Developer Portfolio" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Full Stack Developer & AI Automation Expert",
    description:
      "Building the future with code and AI. Founder of PitchGen & Automate TG. Available for freelance projects.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
