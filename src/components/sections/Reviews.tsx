import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Exceptional work on our automation project. Delivered ahead of schedule and exceeded all expectations. The AI integration was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow",
    content: "Outstanding full-stack development skills. Built our entire SaaS platform from scratch with clean, maintainable code. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&q=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateCo",
    content: "Transformed our manual processes with intelligent automation. Saved our team countless hours. Professional and communicative throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop&q=60",
  },
  {
    name: "David Kim",
    role: "CTO, NextGen Solutions",
    content: "Deep expertise in both AI and full-stack development. Rare combination. Delivered a complex project with precision and creativity.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&q=60",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            What my clients say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
