import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 relative">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(225 100% 40% / 0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
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
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-8 card-border overflow-hidden bg-card text-center"
        >
          {/* Money emoji */}
          <div className="text-4xl mb-4">💰</div>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-lg text-muted-foreground line-through">
              ₹10,000
            </span>
            <span className="text-sm text-muted-foreground">40%OFF</span>
          </div>

          <p className="text-6xl sm:text-7xl font-black text-foreground mb-8">
            ₹5999
          </p>

          <a
            href="#"
            className="block w-full max-w-sm mx-auto py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg text-center glow-button"
          >
            Join Now ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
