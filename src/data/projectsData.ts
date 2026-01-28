export interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
  github?: string;
  image: string;
  is_featured: boolean;
}

export const projects: Project[] = [
  {
    title: "PitchGen",
    description: "AI-powered SaaS platform that helps startups create compelling pitch decks in minutes. Features intelligent content generation, design templates, and investor-ready exports.",
    skills: ["React", "Node.js", "AI/ML", "SaaS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    is_featured: true,
  },
  {
    title: "Automate TG",
    description: "Telegram automation platform enabling businesses to build powerful bots and workflows. Handles millions of messages with smart routing and AI responses.",
    skills: ["Python", "Telegram API", "Automation", "AI"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    is_featured: true,
  },
  {
    title: "AI Workflow Engine",
    description: "Enterprise automation tool that connects various APIs and services with intelligent decision-making capabilities.",
    skills: ["TypeScript", "AI", "APIs", "Enterprise"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    is_featured: false,
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance dashboard for visualizing complex data streams with customizable widgets and alerts.",
    skills: ["React", "D3.js", "WebSocket", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    is_featured: false,
  },
];
