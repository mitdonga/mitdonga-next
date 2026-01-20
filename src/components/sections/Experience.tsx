import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Founder & Lead Developer",
    company: "PitchGen & Automate TG",
    period: "2022 - Present",
    description: "Founded and built two successful SaaS products. PitchGen helps startups create AI-powered pitch decks, while Automate TG provides Telegram automation solutions for businesses.",
    highlights: ["Built from scratch to production", "Managed full product lifecycle", "Scaled to thousands of users"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Freelance / Upwork",
    period: "2020 - Present",
    description: "Delivering high-quality web applications and automation solutions for clients worldwide. Consistently maintaining 100% job success rate with top-rated status.",
    highlights: ["100% Job Success", "Top Rated Plus", "50+ Projects Delivered"],
  },
  {
    title: "AI Automation Specialist",
    company: "Various Clients",
    period: "2021 - Present",
    description: "Specializing in building intelligent automation systems that integrate AI capabilities into business workflows, reducing manual work and increasing efficiency.",
    highlights: ["Custom AI Solutions", "Process Automation", "API Integrations"],
  },
  {
    title: "Software Developer",
    company: "Tech Startup",
    period: "2019 - 2022",
    description: "Contributed to building scalable web applications and microservices architecture. Led frontend development initiatives and mentored junior developers.",
    highlights: ["React & Node.js", "Microservices", "Team Leadership"],
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
