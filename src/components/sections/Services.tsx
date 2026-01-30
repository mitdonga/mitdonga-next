"use client";

import { motion } from "framer-motion";
import { Bot, Code, Database, Globe, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and TypeScript.",
    features: ["Custom Web Apps", "API Development", "Database Design", "Cloud Deployment"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline workflows and reduce manual operations.",
    features: ["Workflow Automation", "AI Chatbots", "Process Optimization", "Integration APIs"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Integrate cutting-edge AI capabilities into your existing systems and applications.",
    features: ["GPT Integration", "Custom AI Models", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Build scalable software-as-a-service products from concept to launch.",
    features: ["MVP Development", "Subscription Systems", "User Analytics", "Multi-tenancy"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Robust backend architectures that scale with your business needs.",
    features: ["Microservices", "Real-time Systems", "Data Pipelines", "Security"],
  },
  {
    icon: Globe,
    title: "Technical Consulting",
    description: "Strategic guidance on technology decisions and architecture planning.",
    features: ["Code Reviews", "Architecture Design", "Tech Stack Selection", "Performance Audits"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive development and automation services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow-sm">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
