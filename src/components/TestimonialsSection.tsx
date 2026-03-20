import { motion } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Dhruvil Patel",
    text: "When I joined this cohort, I just wanted to learn editing as a hobby. I knew nothing about editing before I just found it cool, so I joined the cohort, and then I took part in the 21-day challenge. It changed everything for me. I gained 20k followers from that challenge in just 21 days, built a personal brand and started getting brand deals and earning money from video editing. This cohort is literally insane.",
  },
  {
    name: "Padmesh",
    text: "I am Padmesh, 19 years old, and currently studying in the UK. I went from a beginner to a pro at Premiere Pro and have made 3-4 lakhs within 10 months of learning editing. While others are going to college and trying to find a side hustle, I was earning a good amount of money as a content creator and video editor.",
  },
  {
    name: "Rohan",
    text: "Hello everyone, I am from Jharkhand, while studying in college, mentoring in Cohort here is amazing. I even got a freelance client through it... am even paying my college through freelancing... not just a place to learn but you'll also grow... So if you're thinking cohort, just go for it.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-5 lg:px-8 relative">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-4xl mx-auto">
        {/* Video testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden card-elevated cursor-pointer group"
        >
          <div className="text-center relative z-10">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 glow-button group-hover:scale-110 transition-transform duration-300">
              <Play size={22} className="text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
            <p className="text-xs text-muted-foreground italic px-8 leading-relaxed">
              "To wo ek decision ne meri puri life change kar di"
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-background/50 backdrop-blur-sm px-4 py-2.5 flex items-center gap-3">
            <span className="text-[10px] text-muted-foreground font-medium">0:00 / 2:10</span>
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="w-0 h-full bg-primary rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10 mb-8"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            What Students Talk About Us
          </h3>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">More Success Stories</p>
        </motion.div>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 card-elevated"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.name[0]}
                </div>
                <span className="text-sm font-semibold text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:hidden"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[85%] snap-center rounded-2xl p-6 card-elevated flex-shrink-0"
            >
              <p className="text-xs text-muted-foreground leading-relaxed mb-5 line-clamp-[10]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.name[0]}
                </div>
                <span className="text-sm font-semibold text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
