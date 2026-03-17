import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "WHAT IS THE DURATION OF THE COHORT?", a: "The cohort runs for 90 days (approximately 3 months) with structured modules, live sessions, and community support throughout." },
  { q: "HOW LONG WILL I HAVE ACCESS TO THE CONTENT?", a: "You will have lifetime access to all the recorded content and resources shared during the cohort." },
  { q: "WHAT EDITING SOFTWARE DO YOU TEACH?", a: "We teach Adobe Premiere Pro, Adobe After Effects, and DaVinci Resolve for color grading." },
  { q: "I'M UNABLE TO ACCESS THE COHORT CONTENT, WHAT SHOULD I DO?", a: "Please reach out to us on WhatsApp or email at hello@tharunspeaks.in and our team will help you within 24 hours." },
  { q: "DO YOU TEACH VIDEO EDITING FROM THE BASICS?", a: "Yes! This cohort is completely beginner-friendly. We start from the very basics and take you to an advanced level." },
  { q: "DO I NEED TO BUY THE SOFTWARE AFTER JOINING THE COHORT?", a: "We'll guide you on how to get started with the software. Details will be shared once you join the cohort." },
  { q: "DO YOU GUARANTEE PLACEMENTS FOR STUDENTS IN THE ULTIMATE BATCH?", a: "We provide placement assistance and connect you with hiring partners. Ultimate batch students get priority access to placement opportunities worth 30k/month." },
  { q: "WHAT DO YOU COVER IN THE SOCIAL MEDIA MASTERCLASS?", a: "The masterclass covers content strategy, audience building, monetization, personal branding, and growth hacking for platforms like YouTube and Instagram." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Got Questions?
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
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-2xl card-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-bold text-foreground text-xs uppercase tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus size={14} className="text-primary" />
                    ) : (
                      <Plus size={14} className="text-primary" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
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
