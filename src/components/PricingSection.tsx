import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-5 relative overflow-hidden">
      <div className="section-divider w-full absolute top-0 left-0" />

      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(217 92% 58% / 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4 font-medium">
            WHAT'S YOUR INVESTMENT TO
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
            Become a{" "}
            <span className="text-primary">Ultimate</span>
            <br />
            <span className="text-primary">Video Editor</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-8 sm:p-10 overflow-hidden card-elevated text-center"
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Money emoji */}
          <div className="text-5xl mb-6">💰</div>

          {/* Price */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-base text-muted-foreground line-through decoration-destructive/50">
              ₹10,000
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold bg-secondary/60 px-2.5 py-1 rounded-full">
              40% OFF
            </span>
          </div>

          <p className="text-6xl sm:text-7xl font-black text-foreground mb-10 tracking-tight">
            ₹5999
          </p>

          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg text-center glow-button group"
          >
            Join Now
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
