import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Emmons Air saved us during the hottest week of summer. They came out same day and had our AC running perfectly. Couldn't be happier!",
    name: "Sarah M.",
    role: "Palmetto Homeowner",
  },
  {
    text: "Honest pricing, great work, and they cleaned up after themselves. This is what a real HVAC company looks like. Highly recommend!",
    name: "James R.",
    role: "Bradenton Resident",
  },
  {
    text: "We've used Emmons Air for both our home and business. Always professional, always on time. They're our go-to for everything HVAC.",
    name: "Mike T.",
    role: "Business Owner",
  },
  {
    text: "Got a new AC system installed and the whole process was seamless. The team was knowledgeable and the financing made it affordable.",
    name: "Linda K.",
    role: "Sarasota Homeowner",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          What Our Customers Are Saying
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 card-elevated border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
