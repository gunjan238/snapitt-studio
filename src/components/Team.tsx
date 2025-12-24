import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const team = [
  {
    name: "Arjun Sharma",
    role: "Founder & Lead Photographer",
    avatar: "AS",
  },
  {
    name: "Priya Patel",
    role: "Creative Director",
    avatar: "PP",
  },
  {
    name: "Rahul Verma",
    role: "Head of Videography",
    avatar: "RV",
  },
  {
    name: "Sneha Gupta",
    role: "Digital Marketing Lead",
    avatar: "SG",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Meet The <span className="text-gradient">Creatives</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate professionals dedicated to bringing your vision to life.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative p-6 rounded-2xl bg-card border border-border text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                  {member.avatar}
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                <motion.div
                  className="absolute inset-[-4px] rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
