"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import eyalBgImage from "@/assets/eyal-bg.png";
import fungaiImage from "@/assets/fungai-tichawangana.png";

const reviews = [
  {
    name: "Josiah Bravo",
    role: "JJ Tech Innovations",
    content: "Mit worked with us on ElevenLabs voice agent and n8n Workflow project and delivered outstanding results. He successfully built an AI agent that integrated seamlessly with the Google Cloud API, automated calendar event creation, appended rows to Google Sheets, and handled order confirmation emails. Throughout the project, Mit was smooth, professional, and highly efficient. His work ethic and quality were exceptional—everything was delivered punctually and at the highest standard. Highly recommendable.",
    rating: 5,
    linkedin: "https://www.jjtechinnovations.com",
  },
  {
    name: "Fungai Tichawangana",
    role: "Artist Dynamix",
    content: "Mit has been great to work with! He's very responsive, and he explains everything in detail. He includes documents/comments in his workflows, making them easy to follow! He goes the extra mile. Very happy with the final product.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/fungaiforvisibility/",
    image: fungaiImage,
  },
  {
    name: "Eyal BG",
    role: "ufound AI",
    content: "Mit is incredible! Went above and beyond with helping me fix errors in my n8n project. Will definitely be working with him again.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/eyal-benzaquen-gabriel/",
    image: eyalBgImage,
  },
  {
    name: "Howard Joshua",
    role: "HYD Power",
    content: "It was great working with Mit. He is very knowledgeable about automation and what is possible. I would 100% use him again when I need him.",
    rating: 5,
    linkedin: "https://hydpower.com.au/",
  },
  {
    name: "Aakash Ravikumar",
    role: "Client",
    content: "It was great working with Mit, he understood the problem exactly and found a solution for my specific requirement regarding an automation flow in n8n. Will work with him in future also.",
    rating: 5,
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
          <span className="text-primary font-mono text-sm mb-4 block">{`// TESTIMONIALS`}</span>
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
                {review.image ? (
                  <img
                    src={review.image.src}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div>
                  {review.linkedin ? (
                    <a href={review.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors">
                      {review.name}
                    </a>
                  ) : (
                    <h4 className="font-semibold">{review.name}</h4>
                  )}
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
