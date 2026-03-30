import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";

const CTASection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Get Started</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground uppercase">
            Ready to Remove That Stump?
          </h2>
          <p className="text-lg text-muted-foreground">
            Call us today for a free quote. No stump is too big or too small.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19412641659"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold border-2 border-secondary text-secondary bg-transparent hover:bg-secondary/10 transition-colors"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-5 h-5" />
              (941) 264-1659
            </a>
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
              style={{ borderRadius: "10px" }}
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
