import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "TechStart India",
  "Ananya Fashion",
  "Greenleaf Organics",
  "Metro Hotels",
  "BlueSky Airlines",
  "Sunrise Media",
  "Urban Homes",
  "Swift Logistics",
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/30 to-background" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-muted-foreground text-sm font-display uppercase tracking-wider">
            Trusted By Leading Brands
          </span>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-12 md:gap-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex gap-12 md:gap-16 shrink-0"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-card/50 border border-border/50 whitespace-nowrap"
                >
                  <span className="font-display text-lg md:text-xl text-muted-foreground hover:text-primary transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
