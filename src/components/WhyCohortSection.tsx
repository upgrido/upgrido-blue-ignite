import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Learn Editing", desc: "Master professional video editing tools & techniques" },
  { title: "Practice Projects", desc: "Work on real-world projects to sharpen your skills" },
  { title: "Build Portfolio", desc: "Create a stunning portfolio that stands out" },
  { title: "Get Clients", desc: "Land freelance gigs & agency opportunities" },
  { title: "Make Money", desc: "Turn your skill into a sustainable income stream" },
];

const WhyCohortSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="py-24 px-5 relative overflow-hidden"
    >
      <div className="section-divider w-full absolute top-0 left-0" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(270_80%_60%/0.08)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
            Your Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Learn the{" "}
            <span className="font-display italic text-3xl sm:text-4xl md:text-5xl text-primary">
              Skill
            </span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            A clear career progression path from beginner to earning professional
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Zigzag SVG line (background track) */}
          <svg
            className="absolute top-[52px] left-0 w-full h-16 pointer-events-none"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 30 L125 30 L150 10 L200 50 L250 10 L300 50 L350 30 L500 30 L525 10 L575 50 L625 10 L675 50 L700 30 L875 30 L900 10 L950 50 L1000 30"
              stroke="hsl(var(--muted))"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Animated glowing line overlay */}
          <div className="absolute top-[52px] left-0 w-full h-16 pointer-events-none overflow-hidden">
            <motion.div style={{ width: lineWidth }} className="h-full overflow-hidden">
              <svg
                className="w-full h-full min-w-[1000px]"
                style={{ width: "calc(100vw)", minWidth: "100%" }}
                viewBox="0 0 1000 60"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 30 L125 30 L150 10 L200 50 L250 10 L300 50 L350 30 L500 30 L525 10 L575 50 L625 10 L675 50 L700 30 L875 30 L900 10 L950 50 L1000 30"
                  stroke="url(#neonGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />
                <defs>
                  <linearGradient id="neonGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(217 92% 58%)" />
                    <stop offset="50%" stopColor="hsl(260 80% 65%)" />
                    <stop offset="100%" stopColor="hsl(217 92% 58%)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-10">
          {/* Vertical line track */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-muted" />
          <motion.div
            className="absolute left-[18px] top-0 w-[2px] bg-gradient-to-b from-primary to-[hsl(260_80%_65%)]"
            style={{
              height: lineWidth,
              boxShadow: "0 0 8px hsl(217 92% 58% / 0.6)",
            }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <MobileStepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#pricing"
            className="inline-block px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm glow-button"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
}: {
  step: { title: string; desc: string };
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center"
    >
      {/* Glow dot */}
      <div className="relative mb-4">
        <motion.div
          animate={isInView ? { scale: [1, 1.6, 1], opacity: [0.6, 0.2, 0.6] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          className="absolute inset-0 rounded-full bg-primary/40 blur-md"
          style={{ width: 20, height: 20, top: -2, left: -2 }}
        />
        <div
          className="w-4 h-4 rounded-full border-2 border-primary bg-background relative z-10"
          style={{
            boxShadow:
              "0 0 10px hsl(217 92% 58% / 0.5), 0 0 20px hsl(260 80% 65% / 0.3)",
          }}
        />
      </div>

      {/* Zigzag spacing */}
      <div className="h-12" />

      {/* Card */}
      <div
        className="card-elevated rounded-2xl p-5 text-center w-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(217_92%_58%/0.15)]"
        style={{
          background:
            "linear-gradient(135deg, hsl(222 22% 12% / 0.8), hsl(222 28% 8% / 0.9))",
          border: "1px solid hsl(217 92% 58% / 0.1)",
        }}
      >
        <p className="text-xs font-bold text-primary/60 mb-1">
          0{index + 1}
        </p>
        <h4 className="text-sm font-bold text-foreground mb-1.5">{step.title}</h4>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
};

const MobileStepCard = ({
  step,
  index,
}: {
  step: { title: string; desc: string };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Glow dot */}
      <div className="absolute left-[-22px] top-4">
        <motion.div
          animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.5, 0.15, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          className="absolute -inset-1.5 rounded-full bg-primary/40 blur-sm"
        />
        <div
          className="w-3 h-3 rounded-full border-2 border-primary bg-background relative z-10"
          style={{
            boxShadow: "0 0 8px hsl(217 92% 58% / 0.5)",
          }}
        />
      </div>

      {/* Card */}
      <div
        className="card-elevated rounded-xl p-4 backdrop-blur-md transition-all duration-300"
        style={{
          background:
            "linear-gradient(135deg, hsl(222 22% 12% / 0.8), hsl(222 28% 8% / 0.9))",
          border: "1px solid hsl(217 92% 58% / 0.1)",
        }}
      >
        <p className="text-xs font-bold text-primary/60 mb-0.5">0{index + 1}</p>
        <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
};

export default WhyCohortSection;
