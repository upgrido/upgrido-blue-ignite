import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Who is this cohort for?", a: "This cohort is designed for beginners, intermediate editors, students, freelancers, and content creators who want to level up their video editing skills and build a career in the creative field." },
  { q: "How many months does this cohort run?", a: "The cohort runs for 90 days (3 months) with structured learning modules, hands-on projects, live sessions, and community support throughout." },
  { q: "What editing software will I learn?", a: "You'll learn Adobe Premiere Pro and After Effects — from basic fundamentals to advanced techniques used by professional editors." },
  { q: "Unable to access content?", a: "Content access is batch-based and will be unlocked before your batch starts. If you're facing issues, reach out to our support team on WhatsApp for immediate help." },
  { q: "Do I need to buy software?", a: "Purchasing software is not mandatory to join the cohort. We provide guidance on how to get started, and details will be shared once you join." },
  { q: "What are the community benefits?", a: "You get access to a private community group with peer feedback, networking opportunities, growth challenges, and direct mentorship to accelerate your journey." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-20 lg:py-28 px-5 lg:px-8 relative">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3 font-medium">
            GOT QUESTIONS?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-2xl overflow-hidden card-elevated transition-shadow duration-300 ${
                  isOpen ? "shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)]" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className={`font-semibold text-sm pr-4 transition-colors duration-200 ${
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-primary/20 scale-110" : "bg-secondary/60 scale-100"
                  }`}>
                    {isOpen ? (
                      <Minus size={14} className="text-primary" />
                    ) : (
                      <Plus size={14} className="text-muted-foreground" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
