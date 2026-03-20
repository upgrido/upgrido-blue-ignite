import { motion } from "framer-motion";

const modules = [
  {
    num: "1",
    title: "A to Z Video Editing\n(Premiere Pro + After Effects)",
    items: [
      "Premiere Pro — from basics to advanced workflow",
      "Motion graphics and animation in After Effects",
      "Core design fundamentals every editor needs for visual storytelling",
    ],
    accent: true,
  },
  {
    num: "2",
    title: "Storytelling & Content Thinking",
    items: [
      "Understanding hooks and viewer retention",
      "Structuring short-form and long-form content",
      "Editing for emotion, pacing, and impact",
      "Thinking like a creator, not just an editor",
    ],
  },
  {
    num: "3",
    title: "Build & Monetise Your Skill",
    items: [
      "Finding the right clients and pitching with clarity",
      "Negotiating your pricing with confidence",
      "Building a portfolio that proves your ability",
    ],
  },
  {
    num: "4",
    title: "Personal Branding",
    items: [
      "Transforming from editor to creator",
      "Documenting your growth publicly",
      "Building authority through your work",
      "Turning editing into a long-term advantage",
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-20 lg:py-28 px-5 lg:px-8 relative">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
            What you will{" "}
            <span className="text-primary font-black">learn</span> in
            <br />
            these{" "}
            <span className="inline-flex items-center gap-1.5 bg-secondary/80 border border-border/40 rounded-full px-3 py-0.5">
              <span className="text-sm">📅</span>
              <span className="font-black text-foreground">90</span>
            </span>{" "}
            <span className="text-primary font-black">Days</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-6 overflow-hidden card-elevated ${
                mod.accent ? "border-primary/20" : ""
              }`}
            >
              {mod.accent && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              )}

              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-black text-muted-foreground/20 leading-none select-none">
                  {mod.num}
                </span>
                <h3 className="text-base lg:text-lg font-bold text-foreground whitespace-pre-line leading-snug pt-1">
                  {mod.title}
                </h3>
              </div>

              <ul className="space-y-3 ml-1">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
