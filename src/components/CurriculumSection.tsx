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
    <section id="curriculum" className="py-16 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
            What you will{" "}
            <span className="text-primary font-black">learn</span> in
            <br />
            these{" "}
            <span className="inline-flex items-center gap-1.5 bg-card rounded-full px-3 py-0.5 card-border text-foreground">
              <span className="text-sm">📅</span>
              <span className="font-black">90</span>
            </span>{" "}
            <span className="text-primary font-black">Days</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-5 card-border overflow-hidden"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl font-black text-muted-foreground/30 leading-none">
                  {mod.num}
                </span>
                <h3 className="text-lg font-bold text-foreground whitespace-pre-line leading-tight">
                  {mod.title}
                </h3>
              </div>

              <ul className="space-y-2.5 ml-1">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">?</span>
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
