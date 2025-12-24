import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CameraIntroProps {
  onComplete: () => void;
}

const CameraIntro = ({ onComplete }: CameraIntroProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const bladeCount = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: isAnimating ? "auto" : "none" }}
    >
      {/* Aperture blades container */}
      <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
        {/* Glow effect behind aperture */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent"
          animate={{
            scale: isAnimating ? [1, 1.2, 1] : 2,
            opacity: isAnimating ? [0.5, 0.8, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isAnimating ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {/* Aperture blades */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{ transform: "rotate(-22.5deg)" }}
        >
          {Array.from({ length: bladeCount }).map((_, i) => {
            const angle = (i * 360) / bladeCount;
            return (
              <motion.path
                key={i}
                d="M100,100 L100,20 A80,80 0 0,1 156.57,56.57 Z"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                style={{
                  transformOrigin: "100px 100px",
                  transform: `rotate(${angle}deg)`,
                }}
                initial={{ rotate: angle }}
                animate={{
                  rotate: isAnimating ? angle : angle + 45,
                  scale: isAnimating ? 1 : 0.5,
                  opacity: isAnimating ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: isAnimating ? 0 : i * 0.05,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {/* Center circle with logo text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isAnimating ? 1 : 1.5,
            opacity: isAnimating ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <motion.h1
              className="font-display text-4xl md:text-6xl font-bold text-primary"
              animate={{
                textShadow: isAnimating
                  ? [
                      "0 0 20px hsl(var(--primary) / 0.5)",
                      "0 0 40px hsl(var(--primary) / 0.8)",
                      "0 0 20px hsl(var(--primary) / 0.5)",
                    ]
                  : "0 0 0px transparent",
              }}
              transition={{ duration: 2, repeat: isAnimating ? Infinity : 0 }}
            >
              snap it
            </motion.h1>
            <motion.p
              className="text-muted-foreground mt-2 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Capture. Create. Conquer.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ borderColor: ["hsl(var(--primary) / 0.5)", "hsl(var(--primary))", "hsl(var(--primary) / 0.5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CameraIntro;
