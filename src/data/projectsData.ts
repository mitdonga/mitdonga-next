// Import project images
import pitchgen1 from "@/assets/project_images/pitchgen_1.webp";
import pitchgen2 from "@/assets/project_images/pitchgen_2.webp";
import pitchgen3 from "@/assets/project_images/pitchgen_3.webp";
import pitchgen4 from "@/assets/project_images/pitchgen_4.webp";
import pitchgen5 from "@/assets/project_images/pitchgen_5.webp";
import pitchgen6 from "@/assets/project_images/pitchgen_6.webp";

import automatetg1 from "@/assets/project_images/automatetg_1.webp";
import automatetg2 from "@/assets/project_images/automatetg_2.webp";
import automatetg3 from "@/assets/project_images/automatetg_3.webp";

import phily1 from "@/assets/project_images/phily_1.webp";
import phily2 from "@/assets/project_images/phily_2.webp";
import phily3 from "@/assets/project_images/phily_3.webp";

import spreedly1 from "@/assets/project_images/spreedly_1.webp";

import sparkapt1 from "@/assets/project_images/sparkapt_1.webp";
import sparkapt2 from "@/assets/project_images/sparkapt_2.webp";
import sparkapt3 from "@/assets/project_images/sparkapt_3.webp";
import sparkapt4 from "@/assets/project_images/sparkapt_4.webp";
import sparkapt5 from "@/assets/project_images/sparkapt_5.webp";

import cuelinks1 from "@/assets/project_images/cuelinks_1.webp";
import cuelinks2 from "@/assets/project_images/cuelinks_2.webp";
import cuelinks3 from "@/assets/project_images/cuelinks_3.webp";

import arbologie1 from "@/assets/project_images/arbologie_1.webp";
import arbologie2 from "@/assets/project_images/arbologie_2.webp";
import arbologie3 from "@/assets/project_images/arbologie_3.webp";
import arbologie4 from "@/assets/project_images/arbologie_4.webp";

import umbrella1 from "@/assets/project_images/umbrella_1.webp";
import umbrella2 from "@/assets/project_images/umbrella_2.webp";

export interface Project {
  title: string;
  role: string;
  description: string;
  skills: string[];
  link: string;
  link_2?: string;
  github?: string;
  images: string[];
  is_featured: boolean;
  freelance: boolean;
}

export const projects: Project[] = [
  {
    title: "PitchGen",
    description: "AI-powered SaaS platform that helps startups create compelling pitch decks in minutes. Features intelligent content generation, design templates, and investor-ready exports.",
    role: "Founder",
    skills: ["AI", "React", "Ruby on Rails", "Next.js", "PostgreSQL", "SaaS"],
    images: [
      pitchgen1.src,
      pitchgen2.src,
      pitchgen3.src,
      pitchgen4.src,
      pitchgen5.src,
      pitchgen6.src,
    ],
    link: "https://pitchgen.io",
    github: "#",
    is_featured: true,
    freelance: false,
  },
  {
    title: "Automate TG",
    description: "Telegram automation platform enabling businesses to build powerful bots and workflows. Handles millions of messages with smart routing and AI responses.",
    role: "Founder",
    skills: ["AI", "Ruby on Rails", "React.js", "Supabase", "Golang", "Telegram API", "MTProto", "SaaS"],
    images: [
      automatetg1.src,
      automatetg2.src,
      automatetg3.src,
    ],
    link: "https://automatetg.com",
    github: "#",
    is_featured: true,
    freelance: false,
  },
  {
    title: "Phily AI",
    description: "AI-powered business phone assistant that operates 24/7 to handle inbound calls, manage bookings, capture leads, and prevent revenue loss from missed opportunities. Built with advanced voice AI integration and intelligent call routing to ensure zero missed business opportunities.",
    role: "Technical Founder",
    skills: ["AI", "n8n", "Ruby on Rails", "Supabase", "ElevenLabs", "Retell", "React.js"],
    images: [
      phily1.src,
      phily2.src,
      phily3.src,
    ],
    link: "https://phily.lovable.app",
    is_featured: false,
    freelance: true,
  },
  {
    title: "Spreedly",
    description: "Enterprise-grade payment gateway orchestrator and payment method vaulting platform that unlocks global payment performance. Architected scalable backend systems to handle complex payment routing, tokenization, and multi-gateway orchestration for high-volume transaction processing.",
    skills: ["Ruby on Rails", "PostgreSQL", "Next.js", "Payment Processing", "API Integration"],
    role: "Backend Developer (contributor)",
    images: [
      spreedly1.src,
    ],
    link: "https://spreedly.com",
    github: "#",
    is_featured: true,
    freelance: false,
  },
  {
    title: "SparkAPT",
    description: "Modern CRM and database platform purpose-built for multifamily real estate professionals. Delivered comprehensive full-stack solutions including agent workflows, property management, client relationship tracking, and advanced analytics for apartment locators, real estate agents, and brokers.",
    skills: ["React", "Ruby on Rails", "PostgreSQL", "CRM", "Redis", "Web Scraping"],
    images: [
      sparkapt1.src,
      sparkapt2.src,
      sparkapt3.src,
      sparkapt4.src,
      sparkapt5.src,
    ],
    link: "https://sparkapt.com",
    role: "Full Stack Developer (contributor)",
    github: "#",
    is_featured: true,
    freelance: false,
  },
  {
    title: "Cuelinks",
    description: "Leading affiliate marketing platform designed for influencers, bloggers, content creators, and publishers. Engineered scalable infrastructure for link management, commission tracking, and performance analytics to empower creators monetize their content effectively.",
    skills: ["React", "Ruby on Rails", "PostgreSQL", "Affiliate Marketing", "Analytics"],
    images: [
      cuelinks1.src,
      cuelinks2.src,
      cuelinks3.src,
    ],
    link: "https://cuelinks.com",
    role: "Full Stack Developer (contributor)",
    github: "#",
    is_featured: false,
    freelance: false,
  },
  {
    title: "Arbologie AI Agent",
    description: "Custom AI-powered personal assistant system for arborist business operations. Developed intelligent agents capable of autonomously handling appointment bookings, customer inquiries, and client communication. Built comprehensive full-stack platform providing unified client management and communication interface to streamline business workflows.",
    skills: ["AI", "React", "Ruby on Rails", "PostgreSQL", "Voice AI", "Automation"],
    images: [
      arbologie1.src,
      arbologie2.src,
      arbologie3.src,
      arbologie4.src,
    ],
    link: "https://arbologie.vercel.app/",
    // link_2: "https://www.arbologie.fr",
    role: "AI Agent & Full Stack Developer",
    github: "#",
    is_featured: false,
    freelance: true,
  },
  {
    title: "Umbrella US",
    description: "Comprehensive digital marketing agency platform that enables entrepreneurs to launch and scale marketing agencies. Delivered full-stack solutions integrating marketing services, branding, sales automation, and business management tools to provide end-to-end agency operations infrastructure.",
    skills: ["React.js", "Ruby on Rails", "PostgreSQL", "AI", "Marketing Automation"],
    images: [
      umbrella1.src,
      umbrella2.src,
    ],
    link: "https://umbrellaus.com",
    github: "#",
    role: "Full Stack Developer (contributor)",
    is_featured: false,
    freelance: false,
  },
];
