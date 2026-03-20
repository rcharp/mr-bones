import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does stump grinding cost?",
    a: "The cost depends on the size, location, and number of stumps. We offer free estimates — just give us a call at (941) 780-2579 and we'll come out to assess your job and give you a fair, upfront price.",
  },
  {
    q: "How long does stump grinding take?",
    a: "Most residential stumps can be ground in 30 minutes to 2 hours depending on size. Larger stumps or multiple stumps may take longer. We work efficiently to minimize disruption to your property.",
  },
  {
    q: "What happens to the wood chips after grinding?",
    a: "The grinding process creates mulch from the stump. We can leave the mulch in the hole for it to decompose naturally, spread it around your yard, or haul it away — whatever you prefer.",
  },
  {
    q: "How deep do you grind stumps?",
    a: "We typically grind 6-12 inches below grade, which is deep enough for replanting grass, laying sod, or planting a new tree. If you need deeper grinding for construction purposes, just let us know.",
  },
  {
    q: "Can you grind stumps near structures or fences?",
    a: "Yes! With three different stump grinders, we have the right equipment for tight spaces, near fences, next to foundations, and even in backyards with limited access.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Sarasota, Bradenton, Venice, Arcadia, Wauchula, and surrounding areas throughout Southwest Florida. We've been serving this area for over 31 years.",
  },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28" style={{ backgroundColor: "#1a1a1a" }}>
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Still Not Sure?</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-primary-foreground/70 mt-4">What else would you like to know?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-primary-foreground py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
