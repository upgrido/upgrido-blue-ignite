import { motion } from "framer-motion";

const WhyCohortSection = () => {
  return (
    <section id="why" className="py-24 px-5 relative overflow-hidden">
      <div className="section-divider w-full absolute top-0 left-0" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="text-[4rem] sm:text-[6rem] font-black text-foreground/[0.02] leading-none text-center tracking-tight">
          WHY THIS<br />COHORT?
        </p>
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Learn the{" "}
            <span className="font-display italic text-3xl sm:text-4xl text-primary">Skill</span>
          </h2>
        </motion.div>

        {/* Circular diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 mx-auto mb-12"
        >
          <svg viewBox="0 0 240 240" className="w-full h-full">
            <circle cx="120" cy="120" r="90" fill="none" stroke="hsl(217 92% 58% / 0.08)" strokeWidth="6" />
            <circle cx="120" cy="120" r="90" fill="none" stroke="hsl(217 92% 58% / 0.25)" strokeWidth="1" />
            <circle cx="120" cy="120" r="65" fill="none" stroke="hsl(217 92% 58% / 0.15)" strokeWidth="0.8" />
            <circle cx="120" cy="120" r="5" fill="hsl(217 92% 58% / 0.5)" />
            <circle cx="120" cy="120" r="2" fill="hsl(217 92% 58%)" />

            <line x1="120" y1="120" x2="30" y2="40" stroke="url(#glowGrad1)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="120" y1="120" x2="210" y2="40" stroke="url(#glowGrad2)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="120" y1="120" x2="120" y2="230" stroke="url(#glowGrad3)" strokeWidth="1.5" strokeLinecap="round" />

            <line x1="30" y1="40" x2="210" y2="40" stroke="hsl(217 92% 58% / 0.12)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="30" y1="40" x2="120" y2="230" stroke="hsl(217 92% 58% / 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="210" y1="40" x2="120" y2="230" stroke="hsl(217 92% 58% / 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />

            <circle cx="30" cy="40" r="3" fill="hsl(217 92% 58% / 0.7)" />
            <circle cx="210" cy="40" r="3" fill="hsl(217 92% 58% / 0.7)" />
            <circle cx="120" cy="230" r="3" fill="hsl(217 92% 58% / 0.7)" />

            <defs>
              <linearGradient id="glowGrad1" x1="120" y1="120" x2="30" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(217 92% 58% / 0.6)" />
                <stop offset="100%" stopColor="hsl(217 92% 58% / 0.2)" />
              </linearGradient>
              <linearGradient id="glowGrad2" x1="120" y1="120" x2="210" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(217 92% 58% / 0.6)" />
                <stop offset="100%" stopColor="hsl(217 92% 58% / 0.2)" />
              </linearGradient>
              <linearGradient id="glowGrad3" x1="120" y1="120" x2="120" y2="230" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(217 92% 58% / 0.6)" />
                <stop offset="100%" stopColor="hsl(217 92% 58% / 0.2)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute top-2 left-0 text-[10px] text-muted-foreground font-semibold text-center w-20 leading-tight">
            Freelance /<br />Grow an Agency
          </div>
          <div className="absolute top-2 right-0 text-[10px] text-muted-foreground font-semibold text-center w-20 leading-tight">
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
          className="text-center mb-10"
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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="card-elevated rounded-2xl p-7 text-center"
        >
          <p className="text-sm font-bold text-foreground mb-3">We teach you everything</p>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed max-w-sm mx-auto">
            Not just Editing but how to get your first freelance gig, how to start your own agency, how to grow on your socials and ultimately make revenue out of it.
          </p>
          <a
            href="#pricing"
            className="block w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm text-center glow-button"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCohortSection;
