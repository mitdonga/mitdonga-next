"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Zap } from "lucide-react";

const skills = [
  { icon: Code2, title: "Full Stack Development", description: "React, Node.js, TypeScript, Python, and modern web technologies" },
  { icon: Brain, title: "AI & Machine Learning", description: "Building intelligent systems and automation workflows" },
  { icon: Rocket, title: "SaaS Products", description: "End-to-end product development from concept to launch" },
  { icon: Zap, title: "Automation Expert", description: "Streamlining workflows and reducing manual processes" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// ABOUT ME</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm a passionate developer who thrives at the intersection of technology and creativity. 
            With expertise in full-stack development and AI automation, I build products that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-glow-secondary/10 border border-border"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
