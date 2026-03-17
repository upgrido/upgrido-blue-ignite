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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-secondary/80 backdrop-blur-xl glow-navbar"
          : "bg-secondary/60 backdrop-blur-md"
      }`}
    >
      <a href="#" className="font-display text-xl font-bold text-foreground tracking-wide">
        Upgraido
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-0 w-56 bg-secondary/95 backdrop-blur-xl rounded-2xl p-4 card-border"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 py-2 px-3 text-center rounded-full bg-primary text-primary-foreground font-bold text-sm"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
