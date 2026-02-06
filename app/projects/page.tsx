"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProjectCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || !isHovered) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-full"
    >
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, imgIndex) => (
            <CarouselItem key={imgIndex} className="h-full">
              <img
                src={image}
                alt={`${title} - Image ${imgIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-8 w-8 bg-black/50 hover:bg-black/70 border-white/20 text-white" />
        <CarouselNext className="right-2 h-8 w-8 bg-black/50 hover:bg-black/70 border-white/20 text-white" />
      </Carousel>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-4xl text-lg">
              A complete showcase of my work, from SaaS products to automation
              solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl overflow-hidden border border-border bg-card"
              >
                <div className="aspect-video overflow-hidden relative">
                  {project.images.length > 1 ? (
                    <ProjectCarousel images={project.images} title={project.title} />
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-foreground group-hover:text-primary transition-colors hover:underline flex items-center gap-1.5"
                    >
                      {project.title}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                  <p className="text-sm text-primary/80 font-medium mb-2">
                    {project.role}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.github && project.github !== "#" && (
                      <Button variant="outline" size="sm" asChild className="text-xs">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.link_2 && (
                      <Button variant="outline" size="sm" asChild className="text-xs">
                        <a
                          href={project.link_2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Site
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
