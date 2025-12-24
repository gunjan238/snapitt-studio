import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Camera,
  Video,
  Megaphone,
  Share2,
  Code,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for all your needs.",
    items: ["Wedding Photography", "Brand Photography", "Product Photography"],
    color: "from-primary to-accent",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production that tells your story.",
    items: ["Wedding Films", "Political Campaigns", "Fashion Videos"],
    color: "from-accent to-primary",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that deliver results.",
    items: ["Meta Ads", "Google Ads", "WhatsApp Marketing", "Email Campaigns"],
    color: "from-primary to-accent",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Complete social media management solutions.",
    items: ["Account Handling", "Content Creation", "Daily Communication"],
    color: "from-accent to-primary",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites that convert and impress.",
    items: ["Responsive Design", "E-commerce", "Web Applications"],
    color: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Insights that drive smarter decisions.",
    items: ["Performance Tracking", "Data Reports", "ROI Analysis"],
    color: "from-accent to-primary",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From creative production to digital marketing, we offer end-to-end 
            solutions to elevate your brand and achieve your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border overflow-hidden cursor-pointer card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 relative">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 relative">
                {service.description}
              </p>

              {/* Service items */}
              <ul className="space-y-2 relative">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === i ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
