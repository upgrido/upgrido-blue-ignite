import { motion } from "framer-motion";

const AuthoritySection = () => {
  return (
    <section id="authority" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto"
      >
        <p className="text-3xl sm:text-4xl font-bold">
          <span className="text-primary">7 Years</span>{" "}
          <span className="text-foreground">of Content Creation.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AuthoritySection;
