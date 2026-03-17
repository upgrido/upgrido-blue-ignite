import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Spotlight rays */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, hsl(0 0% 100% / 0.06) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          className="w-[200%] h-full"
          style={{
            background: "conic-gradient(from 180deg at 50% 100%, transparent 30%, hsl(0 0% 100% / 0.03) 40%, transparent 50%, hsl(0 0% 100% / 0.03) 60%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-lg mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-wide leading-snug mb-8">
            Stop delaying your dreams.<br />Start today.
          </h2>
          <a
            href="#pricing"
            className="block w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg text-center glow-button animate-pulse-glow"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
