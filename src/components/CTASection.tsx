import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section id="contact" className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground">
          We're Here When You Need Us. Call us or request a free quote today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+19412584006"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            (941) 258-4006
          </a>
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-full border border-border hover:bg-secondary transition-colors"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Placeholder for GoHighLevel form embed */}
        <div
          id="quote-form"
          className="mt-12 bg-card rounded-2xl border border-border p-8 lg:p-12 card-elevated text-left max-w-xl mx-auto"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Get A Free Quote</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Fill in the form below or paste your GoHighLevel embed code here.
          </p>
          {/* GHL FORM EMBED GOES HERE */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <input
                type="tel"
                placeholder="(808) 555-1234"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">What do you need help with? *</label>
              <textarea
                placeholder="Your message goes straight to my phone, so I'll be able to get back to you ASAP!"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm resize-none"
              />
            </div>
            <button className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-sm">
              Get Free Quote
            </button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to our{" "}
              <a href="#" className="underline hover:text-foreground">Terms of Service</a> and{" "}
              <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
