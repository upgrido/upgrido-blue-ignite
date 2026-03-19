import { motion } from "framer-motion";
import { Play } from "lucide-react";
import sekharLogo from "@/assets/sekhar-logo.png";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-lg mx-auto w-full"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary rounded-full pl-1 pr-4 py-1 mb-8">
          <img
            src={sekharLogo}
            alt="Sekhar Polina"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">Sekhar Polina Brings you</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl font-black tracking-wider text-foreground mb-1">
          UPGRAIDO
        </h1>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-8">
          Ultimate Editing Cohort
        </h2>

        {/* Video Preview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-full rounded-2xl overflow-hidden mb-6 card-border group cursor-pointer"
        >
          <img
            src={videoThumbnail}
            alt="Video Editing Course Preview"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-background/30 flex items-center justify-center group-hover:bg-background/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-button">
              <Play size={28} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Subtext */}
        <p className="text-muted-foreground text-base mb-8 max-w-sm">
          the ultimate beginner-friendly video editing cohort, now powered with the most insane AI tools ever.
        </p>

        {/* CTA */}
        <a
          href="#pricing"
          className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg text-center glow-button animate-pulse-glow block"
        >
          Join now
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
