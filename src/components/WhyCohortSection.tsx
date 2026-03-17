import { motion } from "framer-motion";

const WhyCohortSection = () => {
  return (
    <section id="why" className="py-20 px-4 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="text-[4rem] sm:text-[6rem] font-black text-foreground/[0.03] leading-none text-center tracking-tight">
          WHY THIS<br />COHORT?
        </p>
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Learn the{" "}
            <span className="font-display italic text-3xl sm:text-4xl">Skill</span>
          </h2>
        </motion.div>

        {/* Circular diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 mx-auto mb-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(225 100% 40% / 0.4)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(225 100% 40% / 0.25)" strokeWidth="1" />
            {/* Glow effect */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(225 100% 60% / 0.15)" strokeWidth="4" />
          </svg>
          {/* Labels */}
          <div className="absolute top-4 left-0 text-[10px] text-muted-foreground font-semibold text-center w-20 leading-tight">
            Freelance /<br />Grow an Agency
          </div>
          <div className="absolute top-4 right-0 text-[10px] text-muted-foreground font-semibold text-center w-20 leading-tight">
            Grow on<br />Social Media
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-semibold text-center w-24 leading-tight">
            Get a Placement<br />
            <span className="text-primary text-lg">↓</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Make{" "}
            <span className="font-display italic text-primary text-3xl">Money</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-6 card-border text-center"
        >
          <p className="text-sm font-bold text-foreground mb-2">we teach you everything</p>
          <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
            Not just Editing but how to get your first freelance gig, how to start your own agency, how to grow on your socials and ultimately make revenue out of it
          </p>
          <a
            href="#pricing"
            className="block w-full py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm text-center glow-button"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCohortSection;
