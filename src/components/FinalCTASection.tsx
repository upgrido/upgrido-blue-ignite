import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-28 px-5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, hsl(217 92% 58% / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-lg mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-wide leading-snug mb-10">
            Stop delaying your dreams.<br />Start today.
          </h2>
          <a
            href="#pricing"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg text-center glow-button animate-pulse-glow group"
          >
            Join Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
