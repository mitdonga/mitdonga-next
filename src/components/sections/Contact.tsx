"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFreelancerView } from "@/hooks/use-freelancer-view";

export const Contact = () => {
  const isFreelancerView = useFreelancerView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://n8n.mitdonga.com/webhook/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--glow-primary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">{`// GET IN TOUCH`}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:hello@mitdonga.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@mitdonga.com
                  </a>
                </div>
              </div>
              
              {isFreelancerView && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Upwork</h4>
                    <a href="https://www.upwork.com/freelancers/mitdonga" className="text-muted-foreground hover:text-primary transition-colors">
                      View my profile
                    </a>
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-glow-secondary/10 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Response time:</span> I typically respond within 24 hours. For urgent projects, mention &quot;URGENT&quot; in your message.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <Button 
              variant="glow" 
              size="lg" 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </Button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                Failed to send message. Please try again later.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
