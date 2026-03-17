import { motion } from "framer-motion";

const logos = [
  "swish", "100X", "Google",
  "AD.KO", "RW", "Growth School",
  "AD.KO", "Vortex", "100xEngineers",
];

const HiringSection = () => {
  return (
    <section id="hiring" className="py-16 px-4 bg-royal-blue relative overflow-hidden">
      <div className="max-w-lg mx-auto relative z-10">
        {/* Floating avatars */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-16 h-16 rounded-full bg-foreground/10 border-2 border-foreground/20 flex items-center justify-center"
            >
              <span className="text-2xl">🎓</span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10 text-primary"
        >
          Look who's hiring from us
        </motion.h2>

        <div className="grid grid-cols-3 gap-3">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center h-16 card-border"
            >
              <span className="text-foreground text-xs font-bold">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
