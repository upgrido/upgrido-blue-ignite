import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this cohort for?",
    a: "This cohort is for beginners and intermediate editors who want to learn professional video editing using Premiere Pro and After Effects. It is ideal for students, creators, freelancers, and anyone who wants to build a career in editing and content creation.",
  },
  {
    q: "How many months does this cohort run?",
    a: "The cohort runs for 90 days (approximately 3 months) with structured modules, live sessions, and community support throughout.",
  },
  {
    q: "What do I need before joining the cohort?",
    a: "You need a laptop or PC with at least 8GB RAM, a stable internet connection, and the willingness to learn. No prior editing experience is required.",
  },
  {
    q: "What will I get in the community?",
    a: "You'll get access to a private community of fellow editors, weekly feedback sessions, networking opportunities, and direct mentorship from Sekhar Polina.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            GOT QUESTIONS?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Frequently Asked{" "}
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
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl card-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-foreground text-sm pr-4">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp size={16} className="text-primary" />
                    ) : (
                      <ChevronDown size={16} className="text-primary" />
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

        <p className="text-center text-sm text-muted-foreground mt-8">
          Still have questions?{" "}
          <a
            href="https://wa.me/919398819250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Message us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
