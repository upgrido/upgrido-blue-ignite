import { motion } from "framer-motion";
import sekharLogo from "@/assets/sekhar-logo.png";
import VideoStoryTimeline from "./VideoStoryTimeline";

const socialProof = [
  { name: "sekhar.polinaa", platform: "Instagram", count: "160k+ Followers", link: "https://www.instagram.com/sekhar.polinaa?igsh=ajJsNWllY2J6dWVo" },
  { name: "sekhar.polinaa", platform: "YouTube", count: "2k+ Subscribers", link: "https://youtube.com/@sekharpolinaa?si=Zf9iLBu8iRz5aNmL" },
];

const AuthoritySection = () => {
  return (
    <section id="authority" className="py-20 lg:py-28 px-5 lg:px-8 relative">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[22px] sm:text-[32px] lg:text-[44px] font-bold leading-snug text-foreground"
          >
            <span
              className="inline-block font-extrabold"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              7 Years
            </span>{" "}
            of Content Creation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[22px] sm:text-[32px] lg:text-[44px] font-bold leading-snug text-foreground mt-1"
          >
            3 Years of{" "}
            <span
              className="inline-block font-extrabold"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Editing Experience
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm lg:text-base mt-5 max-w-lg mx-auto leading-relaxed"
          >
            With years of proven success in content creation, freelancing, and building a thriving marketing agency, Sekhar will reveal the powerful secrets that can help you dominate the creative fields.
          </motion.p>

          <VideoStoryTimeline />

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 mt-7 px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm glow-button"
          >
            Join now
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-10 max-w-md lg:max-w-lg mx-auto">
          {socialProof.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="card-elevated rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center ring-2 ring-primary/10">
                <img src={sekharLogo} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight">{item.name}</p>
              <div className="flex items-center gap-1.5">
                {item.platform === "YouTube" ? (
                  <svg className="w-3.5 h-3.5 text-destructive" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="hsl(0 0% 100%)" points="9.545,15.568 15.818,12 9.545,8.432"/></svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                )}
                <span className="text-[11px] text-muted-foreground font-medium">{item.count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
