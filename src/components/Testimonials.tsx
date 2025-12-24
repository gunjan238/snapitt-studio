import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ravi & Meera",
    role: "Wedding Clients",
    content:
      "Snapitt captured our wedding day beautifully. Every photo tells a story, and the video still makes us cry happy tears. Absolutely recommend them!",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "CEO, TechStart India",
    content:
      "Their digital marketing strategies helped us 3x our leads in just 3 months. The team truly understands data-driven growth.",
    rating: 5,
  },
  {
    name: "Ananya Fashion House",
    role: "Fashion Brand",
    content:
      "The product photography exceeded our expectations. Clean, professional, and perfectly aligned with our brand aesthetic.",
    rating: 5,
  },
  {
    name: "Sanjay Reddy",
    role: "Political Campaign Manager",
    content:
      "Snapitt's videography team delivered impactful campaign videos that resonated with voters. Professional and reliable.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Main testimonial */}
            <motion.div
              key={currentIndex}
              className="p-8 md:p-12 rounded-3xl bg-card border border-border relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold">
                  {testimonials[currentIndex].name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
