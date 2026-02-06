"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projectsData";
import { useFreelancerView } from "@/hooks/use-freelancer-view";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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

export const Projects = () => {
  const isFreelancerView = useFreelancerView();
  
  // Filter projects based on view
  const displayedProjects = isFreelancerView
    ? projects.filter((p) => p.is_featured).slice(0, 3)
    : projects.filter((p) => p.is_featured && !p.freelance).slice(0, 3);

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
          <span className="text-primary font-mono text-sm mb-4 block">{`// MY WORK`}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {isFreelancerView 
              ? "A showcase of my freelance work and client projects."
              : "A showcase of my most impactful work, from SaaS products to automation solutions."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
