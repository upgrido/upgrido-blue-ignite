import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "What you'll learn", href: "#curriculum" },
    { label: "Why this Cohort?", href: "#why" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-lg rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-700 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border border-border/40 glow-navbar"
          : "bg-background/40 backdrop-blur-lg border border-transparent"
      }`}
    >
      <a href="#" className="text-lg font-bold text-foreground tracking-wide">
        Upgrido
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-9 h-9 rounded-xl bg-secondary/80 border border-border/40 flex items-center justify-center text-foreground hover:bg-secondary transition-all duration-200"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 -z-10"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-14 right-0 w-56 bg-card/95 backdrop-blur-2xl rounded-2xl p-3 card-elevated"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3.5 text-muted-foreground hover:text-foreground transition-all duration-200 rounded-xl hover:bg-secondary/60 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border/30">
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3.5 text-center rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-button"
                >
                  Join Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
