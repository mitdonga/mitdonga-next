import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Founder",
    company: "PitchGen & AutomateTG",
    period: "November 2025 - Present",
    description: "PitchGen is an AI-Powered Website Audits & Pitch Deck Generator that helps digital marketers and agencies close deals faster. AutomateTG is a Telegram automation platform powered by AI and MTProto.",
    highlights: ["SaaS Products", "AI-Powered Tools", "Automation Platforms"],
  },
  {
    title: "AI Automation Expert & Full-Stack Developer",
    company: "Velotio Technologies",
    period: "April 2025 - Present",
    description: "I design and build AI-powered automation systems and n8n workflows to streamline business processes, reduce operational costs, and enhance productivity, accuracy, and profit margins.",
    highlights: ["AI Automation", "n8n Workflows", "Scalable Solutions"],
  },
  {
    title: "AI Automation Expert & Software Engineer",
    company: "Cuelinks Technology Pvt Ltd",
    period: "September 2023 - April 2025",
    description: "I have contributed to backend and developed AI-powered automations, agent-based workflows, and RAG systems.",
    highlights: ["AI Automations", "RAG Systems", "Agent Workflows"],
  },
  {
    title: "Full Stack Developer",
    company: "Complitech",
    period: "June 2022 - September 2023",
    description: "I was responsible to build frontend using React.js, backend using Ruby on Rails, n8n workflows, and AI Automation.",
    highlights: ["React.js", "Ruby on Rails", "n8n Workflows"],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "June 2020 - May 2022",
    description: "Worked with startups and clients to design and develop full-stack/backend applications using Ruby on Rails and React.js.",
    highlights: ["Ruby on Rails", "React.js", "Startup Projects"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// EXPERIENCE</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my professional growth and key milestones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
