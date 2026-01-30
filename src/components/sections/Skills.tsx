"use client";

import { motion } from "framer-motion";
import { Bot, Layout, Server, Database, Cloud, Wrench, CreditCard, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Bot,
    title: "AI Platforms",
    skills: ["n8n", "Make.com", "ElevenLabs", "Retell", "Vapi", "ChatGPT", "Gemini", "Claude"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["Lovable", "React.js", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Ruby on Rails", "Supabase"],
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: ["AWS", "DigitalOcean", "Kamal", "CI/CD"],
  },
  {
    icon: Wrench,
    title: "Dev Tools",
    skills: ["Git", "GitHub", "Cursor", "AntiGravity IDE"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    skills: ["Stripe", "PayPal", "CyberSource", "Paysafe"],
  },
  {
    icon: Users,
    title: "CRM Platforms",
    skills: ["GoHighLevel", "Zoho", "ClickUp", "HubSpot", "Jira"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{`// TECH STACK`}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning AI automation, full-stack development, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
