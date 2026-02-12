import { Percent, CreditCard, Search } from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  {
    icon: Percent,
    title: "Up to 20% Off For New Customers",
    description: "Get 20% off on repairs and 10% off on new installations and replacements.",
  },
  {
    icon: CreditCard,
    title: "Financing Options Available",
    description: "Get what you need now, pay over time. Flexible plans, quick approval.",
  },
  {
    icon: Search,
    title: "Free HVAC System Inspection",
    description: "We give a free inspection for new systems. Schedule yours today!",
  },
];

const SpecialOffers = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Limited Time</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          Special Offers & Benefits
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 card-elevated border border-border text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <offer.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{offer.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialOffers;
