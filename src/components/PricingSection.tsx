import { motion } from "framer-motion";

const plans = [
  {
    name: "ESSENTIAL",
    originalPrice: "₹8000",
    price: "₹4999",
    gst: "+GST",
    desc: "For students passionate about video editing",
    features: [
      "Studio Quality Lectures",
      "Weekly 2 live classes",
      "Access to the community",
    ],
    style: "bg-card",
  },
  {
    name: "ELITE",
    originalPrice: "₹12,000",
    price: "₹6999",
    gst: "+GST",
    desc: "For creative minds eager to excel in Video Editing, Design & Content Creation",
    badge: "MOST POPULAR",
    features: [
      "BONUS: Weekly Social Media Masterclasses",
      "Access to Edit Battles, Community Games & Challenges",
      "Video Editing Assets worth 5000/-",
    ],
    style: "bg-royal-blue",
  },
  {
    name: "ULTIMATE",
    originalPrice: "₹25,000",
    price: "₹14999",
    gst: "+GST",
    desc: "For students serious about building a career in Creative Industry",
    features: [
      "Everything in Elite",
      "Personal Learning Manager to track your Progress",
      "Access to placement worth 30k/Month",
      "Special Group with Tharun",
      "Video Editing Assets worth 10000/-",
    ],
    style: "bg-crimson",
    torn: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 relative">
      {/* Dot grid bg */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, hsl(225 100% 40% / 0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            The Best Prices Ever
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Pick your plan and start EDITING today. One flat fee.
          </p>
        </motion.div>

        <div className="space-y-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 card-border overflow-hidden ${plan.style} ${plan.torn ? "pt-8 pb-8" : ""}`}
            >
              {plan.torn && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-5 bg-background torn-edge-bottom z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-5 bg-background torn-edge-top z-10" />
                </>
              )}

              {plan.badge && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                <span className="text-3xl font-black text-foreground">{plan.price}</span>
                <span className="text-xs text-muted-foreground">{plan.gst}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>

              <a
                href="#"
                className="block w-full py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm text-center glow-button mb-4"
              >
                Join Now
              </a>

              <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold mb-2">
                What's included
              </p>
              <ul className="space-y-1.5">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                    <span className="text-primary shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
