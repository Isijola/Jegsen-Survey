import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import heroVideo from "@/assets/videos/hero-african-surveyor.mp4";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[150svh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback Image */}
          <img
            src="https://images.unsplash.com/photo-1541944743827-e9529e843f41?auto=format&fit=crop&q=80&w=2000"
            alt="Offshore Survey Operations"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/40 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-3xl py-24 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-display font-bold text-white leading-tight mb-6
              text-[clamp(2.2rem,6vw,4.5rem)]
            "
          >
            Surveying is{" "}
            <span className="text-white/95">Power</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              text-gray-100 mb-10 max-w-2xl
              text-[clamp(1rem,2.5vw,1.25rem)]
            "
          >
            Driven to be the best at everything we do. From strategic planning to
            business execution, we provide superior survey and positioning
            services for global offshore projects.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToServices()}
              className="
                bg-accent hover:bg-secondary/90
                text-white font-bold rounded-full
                px-8 py-6 text-base md:text-lg
                shadow-lg shadow-secondary/30
              "
            >
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="
                border-white text-white bg-transparent
                hover:bg-white/10 rounded-full
                px-8 py-6 text-base md:text-lg
              "
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
