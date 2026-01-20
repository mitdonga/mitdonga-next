import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PitchGen",
    description: "AI-powered SaaS platform that helps startups create compelling pitch decks in minutes. Features intelligent content generation, design templates, and investor-ready exports.",
    tags: ["React", "Node.js", "AI/ML", "SaaS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Automate TG",
    description: "Telegram automation platform enabling businesses to build powerful bots and workflows. Handles millions of messages with smart routing and AI responses.",
    tags: ["Python", "Telegram API", "Automation", "AI"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AI Workflow Engine",
    description: "Enterprise automation tool that connects various APIs and services with intelligent decision-making capabilities.",
    tags: ["TypeScript", "AI", "APIs", "Enterprise"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance dashboard for visualizing complex data streams with customizable widgets and alerts.",
    tags: ["React", "D3.js", "WebSocket", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "#",
    github: "#",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--glow-secondary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// MY WORK</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my most impactful work, from SaaS products to automation solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
