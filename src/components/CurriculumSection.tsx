import { motion } from "framer-motion";

const modules = [
  {
    num: "1",
    title: "Advanced Video Editing",
    subtitle: "Unleash your creativity with cutting-edge AI tools for design, content, and video.",
    items: [
      "A → Z of Video Editing",
      "Advanced Motion Graphics in Adobe After Effects",
      "Advanced Color Grading in Davinci Resolve",
    ],
    cta: true,
  },
  {
    num: "2",
    title: "Social Media Growth",
    items: [
      "Content Planning & Packaging",
      "Scripting",
      "Storytelling",
      "SEO",
      "Basics of Cinematography",
    ],
    bgDecor: "graph",
  },
  {
    num: "3",
    title: "Freelancing & Agency Building",
    items: [
      "How, where & when to reach out to clients?",
      "Basics of Marketing",
      "How to Negotiate Prices?",
      "How to Scale an Agency?",
    ],
    bgDecor: "abstract",
  },
  {
    num: "4",
    title: "Introducing the AI Creative Studio",
    subtitle: "Unleash your creativity with cutting-edge AI tools for design, content, and video.",
    items: [],
    isNew: true,
    italic: true,
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
            <span className="font-display italic">What you'll learn</span>{" "}
            in this Cohort
          </h2>
        </motion.div>

        <div className="space-y-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-2xl p-5 card-border overflow-hidden"
            >
              {mod.isNew && (
                <span className="absolute top-4 right-4 bg-purple-600 text-foreground text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  💎 New
                </span>
              )}

              {mod.bgDecor === "graph" && (
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    <polyline fill="none" stroke="currentColor" strokeWidth="1" points="0,80 30,60 60,70 90,30 120,50 150,20 180,40 200,10" />
                  </svg>
                </div>
              )}

              <h3 className={`text-lg font-bold text-foreground mb-2 ${mod.italic ? "font-display italic" : ""}`}>
                <span className="text-primary mr-2">{mod.num}</span>
                {mod.title}
              </h3>

              {mod.subtitle && (
                <p className="text-xs text-muted-foreground mb-3">{mod.subtitle}</p>
              )}

              {mod.cta && (
                <a
                  href="#pricing"
                  className="inline-block mb-4 px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm glow-button"
                >
                  Join now
                </a>
              )}

              {mod.items.length > 0 && (
                <ul className="space-y-2">
                  {mod.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
