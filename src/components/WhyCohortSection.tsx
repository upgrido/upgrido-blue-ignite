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

        {/* Circular diagram with light path lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 mx-auto mb-10"
        >
          <svg viewBox="0 0 240 240" className="w-full h-full">
            {/* Outer glow circle */}
            <circle cx="120" cy="120" r="90" fill="none" stroke="hsl(225 100% 60% / 0.12)" strokeWidth="6" />
            {/* Main circles */}
            <circle cx="120" cy="120" r="90" fill="none" stroke="hsl(225 100% 40% / 0.4)" strokeWidth="1.2" />
            <circle cx="120" cy="120" r="65" fill="none" stroke="hsl(225 100% 40% / 0.25)" strokeWidth="1" />

            {/* Light path lines from center (Skill) radiating to each outcome */}
            {/* Center point */}
            <circle cx="120" cy="120" r="4" fill="hsl(225 100% 60% / 0.6)" />

            {/* Path to Freelance (top-left) */}
            <line x1="120" y1="120" x2="30" y2="40" stroke="url(#glowGrad1)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="120" y1="120" x2="30" y2="40" stroke="hsl(225 100% 70% / 0.15)" strokeWidth="4" strokeLinecap="round" />

            {/* Path to Social Media (top-right) */}
            <line x1="120" y1="120" x2="210" y2="40" stroke="url(#glowGrad2)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="120" y1="120" x2="210" y2="40" stroke="hsl(225 100% 70% / 0.15)" strokeWidth="4" strokeLinecap="round" />

            {/* Path to Placement (bottom-center) */}
            <line x1="120" y1="120" x2="120" y2="230" stroke="url(#glowGrad3)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="120" y1="120" x2="120" y2="230" stroke="hsl(225 100% 70% / 0.15)" strokeWidth="4" strokeLinecap="round" />

            {/* Cross paths between outcomes */}
            {/* Freelance to Social Media */}
            <line x1="30" y1="40" x2="210" y2="40" stroke="hsl(225 100% 50% / 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Freelance to Placement */}
            <line x1="30" y1="40" x2="120" y2="230" stroke="hsl(225 100% 50% / 0.15)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Social Media to Placement */}
            <line x1="210" y1="40" x2="120" y2="230" stroke="hsl(225 100% 50% / 0.15)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Endpoint dots */}
            <circle cx="30" cy="40" r="3" fill="hsl(225 100% 60% / 0.8)" />
            <circle cx="210" cy="40" r="3" fill="hsl(225 100% 60% / 0.8)" />
            <circle cx="120" cy="230" r="3" fill="hsl(225 100% 60% / 0.8)" />

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="glowGrad1" x1="120" y1="120" x2="30" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(225 100% 60% / 0.7)" />
                <stop offset="100%" stopColor="hsl(225 100% 70% / 0.3)" />
              </linearGradient>
              <linearGradient id="glowGrad2" x1="120" y1="120" x2="210" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(225 100% 60% / 0.7)" />
                <stop offset="100%" stopColor="hsl(225 100% 70% / 0.3)" />
              </linearGradient>
              <linearGradient id="glowGrad3" x1="120" y1="120" x2="120" y2="230" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(225 100% 60% / 0.7)" />
                <stop offset="100%" stopColor="hsl(225 100% 70% / 0.3)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Labels */}
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
