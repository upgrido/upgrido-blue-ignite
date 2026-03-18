import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 relative">
      {/* Dot grid bg */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, hsl(225 100% 40% / 0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            The Best Prices Ever
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Pick your plan and start EDITING today. One flat fee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-6 card-border overflow-hidden bg-card"
        >
          {/* 40% OFF badge */}
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full">
            40% OFF
          </span>

          <h3 className="text-lg font-bold text-foreground mb-1">
            Become a Ultimate Video Editor
          </h3>

          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-sm text-muted-foreground line-through">₹10,000</span>
            <span className="text-4xl font-black text-foreground">₹5999</span>
          </div>
          <p className="text-xs text-muted-foreground mb-5">
            For students serious about building a career in the Creative Industry
          </p>

          <a
            href="#"
            className="block w-full py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm text-center glow-button mb-5"
          >
            Join Now
          </a>

          <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">
            What's included
          </p>
          <ul className="space-y-1.5">
            {[
              "Studio Quality Lectures",
              "Weekly 2 live classes",
              "Access to the community",
              "Weekly Social Media Masterclasses",
              "Access to Edit Battles, Community Games & Challenges",
              "Video Editing Assets worth 10000/-",
              "Personal Learning Manager to track your Progress",
              "Access to placement worth 30k/Month",
              "Special Group with Tharun",
            ].map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                <span className="text-primary shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
