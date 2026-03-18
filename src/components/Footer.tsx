import { motion } from "framer-motion";
import sekharAvatar from "@/assets/sekhar-avatar.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <img
            src={sekharAvatar}
            alt="Sekhar Polina"
            className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary/30"
          />
          <h3 className="text-lg font-bold text-foreground mb-1">tharunspeaks.in</h3>
          <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
            the ultimate beginner-friendly video editing cohort, now powered with the most insane AI tools ever.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Get in Touch:{" "}
            <a href="mailto:hello@tharunspeaks.in" className="text-primary hover:underline">
              hello@tharunspeaks.in
            </a>
          </p>
        </motion.div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://www.instagram.com/sekhar.polinaa?igsh=ajJsNWllY2J6dWVo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card card-border flex items-center justify-center hover:bg-muted transition-colors">
            <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://youtube.com/@sekharpolinaa?si=Zf9iLBu8iRz5aNmL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card card-border flex items-center justify-center hover:bg-muted transition-colors">
            <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="hsl(0 0% 0%)" points="9.545,15.568 15.818,12 9.545,8.432"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Sections
            </p>
            <ul className="space-y-2">
              {[
                { label: "What you'll learn", href: "#curriculum" },
                { label: "Why this Cohort?", href: "#why" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Follow Us
            </p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/sekhar.polinaa?igsh=ajJsNWllY2J6dWVo" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@sekharpolinaa?si=Zf9iLBu8iRz5aNmL" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Sekhar Polina · Upgraido Learn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
