import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "WHAT IS THE DURATION OF THE COHORT?", a: "The cohort runs for 90 days (approximately 3 months) with structured modules, live sessions, and community support throughout." },
  { q: "HOW LONG WILL I HAVE ACCESS TO THE CONTENT?", a: "You will have lifetime access to all the recorded content and resources shared during the cohort." },
  { q: "WHAT EDITING SOFTWARE DO YOU TEACH?", a: "We teach Adobe Premiere Pro, Adobe After Effects, and DaVinci Resolve for color grading." },
  { q: "I'M UNABLE TO ACCESS THE COHORT CONTENT, WHAT SHOULD I DO?", a: "Please reach out to us on WhatsApp and our team will help you within 24 hours." },
  { q: "DO YOU TEACH VIDEO EDITING FROM THE BASICS?", a: "Yes! This cohort is completely beginner-friendly. We start from the very basics and take you to an advanced level." },
  { q: "DO I NEED TO BUY THE SOFTWARE AFTER JOINING THE COHORT?", a: "We'll guide you on how to get started with the software. Details will be shared once you join the cohort." },
  { q: "DO YOU GUARANTEE PLACEMENTS FOR STUDENTS IN THE ULTIMATE BATCH?", a: "We provide placement assistance and connect you with hiring partners. Ultimate batch students get priority access to placement opportunities worth 30k/month." },
  { q: "WHAT DO YOU COVER IN THE SOCIAL MEDIA MASTERCLASS?", a: "The masterclass covers content strategy, audience building, monetization, personal branding, and growth hacking for platforms like YouTube and Instagram." },
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
                className="rounded-2xl overflow-hidden card-elevated"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="font-semibold text-foreground text-xs uppercase tracking-wide pr-4 group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? "bg-primary/20 rotate-0" : "bg-secondary/60"
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
