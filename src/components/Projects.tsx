import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioProduct from "@/assets/portfolio-product.jpg";
import portfolioMarketing from "@/assets/portfolio-marketing.jpg";

const projects = [
  {
    title: "Elegant Wedding Films",
    category: "Videography",
    image: portfolioWedding,
    description: "Cinematic wedding coverage capturing every precious moment.",
  },
  {
    title: "Fashion Lookbook",
    category: "Photography",
    image: portfolioFashion,
    description: "High-fashion editorial shoot for luxury brand campaign.",
  },
  {
    title: "Product Launch",
    category: "Photography",
    image: portfolioProduct,
    description: "Premium product photography for e-commerce success.",
  },
  {
    title: "Digital Growth Campaign",
    category: "Marketing",
    image: portfolioMarketing,
    description: "360° digital marketing strategy with measurable ROI.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our best work across photography, videography, and digital campaigns.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Category badge */}
                <motion.span
                  className="inline-block w-fit px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {project.category}
                </motion.span>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description - shows on hover */}
                <motion.p
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    y: hoveredIndex === i ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Arrow icon */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    scale: hoveredIndex === i ? 1 : 0.8,
                    rotate: hoveredIndex === i ? 0 : -45,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
