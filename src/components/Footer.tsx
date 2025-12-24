import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Services: [
      "Photography",
      "Videography",
      "Digital Marketing",
      "Social Media",
      "Web Development",
      "Analytics",
    ],
    Company: ["About Us", "Our Team", "Careers", "Blog", "Press"],
    Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-block font-display text-2xl font-bold text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              snap it
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Crafting visual stories that captivate, connect, and convert. 
              Your trusted creative partner since 2019.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Snapitt. All rights reserved.
          </p>
          
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
