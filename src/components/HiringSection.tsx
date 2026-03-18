import { motion } from "framer-motion";
import sekharAvatar from "@/assets/sekhar-avatar.png";

const companies = [
  { name: "Google", color: "from-blue-400 via-red-400 via-yellow-400 to-green-400", letter: "G" },
  { name: "Meta", color: "from-blue-500 to-blue-300", letter: "M" },
  { name: "Unacademy", color: "from-green-400 to-emerald-300", letter: "U" },
  { name: "Flipkart", color: "from-yellow-400 to-blue-500", letter: "F" },
  { name: "Microsoft", color: "from-red-400 via-green-400 via-blue-400 to-yellow-400", letter: "M" },
];

const floatTransition = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

const HiringSection = () => {
  return (
    <section id="hiring" className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(225,60%,8%)] via-[hsl(225,50%,12%)] to-[hsl(225,60%,8%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(217 100% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 100% 60% / 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Floating profile images */}
        <div className="flex justify-center gap-5 mb-8">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              animate={floatTransition(i * 0.5)}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 rounded-full bg-primary/30 blur-md group-hover:bg-primary/50 transition-all duration-300" />
              <div className="relative w-16 h-16 rounded-full border-2 border-primary/40 overflow-hidden bg-card">
                <img
                  src={sekharAvatar}
                  alt="Graduate"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-black text-center mb-10 text-primary drop-shadow-[0_0_20px_hsl(217,100%,60%,0.4)]"
        >
          Look who's hiring from us
        </motion.h2>

        {/* Companies card with glow border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group"
        >
          {/* Neon glow border */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />

          <div className="relative bg-[hsl(220,30%,8%,0.9)] backdrop-blur-xl rounded-2xl p-6 border border-primary/20">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className={`flex flex-col items-center justify-center gap-2 rounded-xl p-3 sm:p-4 bg-foreground/[0.04] border border-foreground/[0.06] hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-300 cursor-pointer ${
                    i >= 3 ? "col-span-1" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center text-lg font-black text-background`}
                  >
                    {company.letter}
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom row center alignment for 5 items (last 2 centered) */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringSection;
