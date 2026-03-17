import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Dhruvil Patel",
    text: "When I joined this cohort, I just wanted to learn editing as a hobby. I knew nothing about editing before I just found it cool, so I joined the cohort, and then I took part in the 21-day challenge. It changed everything for me. I gained 20k followers from that challenge in just 21 days, built a personal brand and started getting brand deals and earning money from video editing, and also got the opportunity to work with one of my favourite creators, Tharun Speaks. This cohort is literally insane, it doesn't just teach you how to edit the best videos, but will help you grow in social media and build your personal brand.",
  },
  {
    name: "Padmesh",
    text: "Hey guys, I am Padmesh, 19 years old, and currently studying in the UK. I am a student of Tharun's first cohort, and it was a game-changer for me. I went from a beginner to a pro at Premiere Pro and got the chance to work with Tharun Speaks and have made 3-4 lakhs within 10 months of learning editing. While others are going to college and trying to find a side hustle, I was earning a good amount of money as a content creator and video editor in the UK, along with my studies, as they pay really well here. All thanks to Tharun bhaiya, Neeraj bhaiya and the entire cohort.",
  },
  {
    name: "Rohan",
    text: "Hello everyone, I am from Jharkhand, while studying in college, mentoring in Cohort here is amazing. I even got a freelance client through... am even paying my college through freelancing... not just a place to learn but you'll also grow... So if you're thinking cohort, just go for it.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-lg mx-auto">
        {/* Video testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-video bg-card rounded-2xl card-border mb-4 flex items-center justify-center overflow-hidden"
        >
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-3 glow-button">
              <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="text-xs text-muted-foreground italic px-6">
              "To wo ek decision ne meri puri life change kar di"
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-background/60 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground">0:00 / 2:10</span>
            <div className="flex-1 h-1 bg-muted rounded-full">
              <div className="w-0 h-full bg-primary rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-foreground text-center mt-8 mb-4"
        >
          What Students Talk About Us
        </motion.h3>

        <p className="text-sm text-muted-foreground text-center mb-6">More Success Stories</p>

        {/* Horizontal scroll testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[85%] snap-center bg-card rounded-2xl p-5 card-border flex-shrink-0"
            >
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-[12]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
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
