import { motion } from "framer-motion";

const modules = [
  {
    num: "1",
    title: "A to Z Video Editing (Premiere Pro + After Effects)",
    items: [
      "Premiere Pro from basics to advanced workflow",
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
    emoji: "📚",
  },
  {
    num: "3",
    title: "Build & Monetise Your Skill",
    items: [
      "Finding the right clients and pitching with clarity",
      "Building a freelance income from editing",
      "Growing your personal brand as a creator-editor",
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
            <span className="text-primary">learn</span>{" "}
            in these{" "}
            <span className="inline-flex items-center justify-center bg-secondary text-foreground font-bold text-lg px-3 py-0.5 rounded-full mx-1">
              90
            </span>{" "}
            <span className="text-primary">Days</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-5 card-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">
                <span className="text-primary mr-2">{mod.num}</span>
                {mod.title}
              </h3>
              <ul className="space-y-2">
                {mod.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              {mod.emoji && (
                <span className="absolute bottom-3 right-4 text-3xl opacity-80">
                  {mod.emoji}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
