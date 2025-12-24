import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Target, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Camera,
      title: "Premium Quality",
      description: "We use industry-leading equipment and techniques to deliver exceptional results.",
    },
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Every project is backed by data-driven strategies tailored to your goals.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Our passionate experts work closely with you from concept to completion.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Crafting Visual Stories{" "}
              <span className="text-gradient">Since 2019</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Snapitt is a full-service creative agency specializing in photography, 
              videography, digital marketing, and web development. We believe in the 
              power of visual storytelling to transform brands and captivate audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From stunning wedding captures to impactful brand campaigns, our team 
              brings creativity, technical expertise, and strategic thinking to every 
              project. We don't just create content — we create connections.
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-display text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
