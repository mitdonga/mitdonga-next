import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Full Stack Developer & AI Automation Expert",
  description:
    "A complete showcase of my work, from SaaS products to automation solutions. Explore PitchGen, AutomateTG, and other innovative projects.",
  openGraph: {
    title: "Projects | Full Stack Developer & AI Automation Expert",
    description:
      "A complete showcase of my work, from SaaS products to automation solutions.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
