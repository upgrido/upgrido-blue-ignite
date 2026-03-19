import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import sekharLogo from "@/assets/sekhar-logo.png";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-5 pt-28 pb-16 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center max-w-lg mx-auto w-full relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 bg-secondary/60 border border-border/40 rounded-full pl-1.5 pr-5 py-1.5 mb-10 backdrop-blur-sm"
        >
          <img
            src={sekharLogo}
            alt="Sekhar Polina"
            className="w-7 h-7 rounded-full object-cover ring-2 ring-primary/20"
          />
          <span className="text-xs font-medium text-muted-foreground tracking-wide">Sekhar Polina Brings you</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-foreground mb-2 leading-none">
            UPGRIDO
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground leading-tight mb-10">
            Ultimate Editing Cohort
          </h2>
        </motion.div>

        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.015 }}
          className="relative w-full rounded-2xl overflow-hidden mb-8 group cursor-pointer card-elevated"
        >
          <img
            src={videoThumbnail}
            alt="Video Editing Course Preview"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/25 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center glow-button backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <Play size={24} className="text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm"
        >
          The ultimate beginner-friendly video editing cohort, now powered with the most insane AI tools ever.
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#pricing"
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base text-center glow-button animate-pulse-glow flex items-center justify-center gap-2 group"
        >
          Join Now
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
