import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroServices from "@/assets/hero-services.jpg";
import { useQuoteModal } from "@/components/QuoteModal";

interface ServiceAreaPageProps {
  city: string;
  tagline: string;
  intro: string;
}

const services = [
  {
    title: "Stump Grinding",
    href: "/services/stump-grinding",
    items: [
      "Residential & commercial stump grinding",
      "Below-grade grinding for replanting",
      "Same-day service available",
    ],
  },
  {
    title: "Root Removal",
    href: "/services/root-removal",
    items: [
      "Surface root grinding to prevent damage",
      "Foundation and driveway protection",
      "Complete root system removal",
    ],
  },
  {
    title: "Land Clearing",
    href: "/services/land-clearing",
    items: [
      "Lot clearing for new construction",
      "Multiple stump removal projects",
      "Volume discounts for large jobs",
    ],
  },
  {
    title: "Storm Cleanup",
    href: "/services/storm-cleanup",
    items: [
      "Post-hurricane stump removal",
      "Emergency response available",
      "Property restoration support",
    ],
  },
];

const ServiceAreaPage = ({ city, tagline, intro }: ServiceAreaPageProps) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black">
          <img
            src={heroServices}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Service Area</span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground uppercase">
                Stump Grinding in {city}
              </h1>
              <p className="text-xl text-primary-foreground/80 mt-3 font-medium">{tagline}</p>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="tel:+19417802579"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" />
                  (941) 780-2579
                </a>
                <button
                  onClick={openQuoteModal}
                  className="px-8 py-3 font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "10px" }}
                >
                  Free Estimate
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground uppercase">
                Our Services in {city}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-8 border border-secondary/30"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4 uppercase">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <p className="text-muted-foreground text-lg">
              <a href="/about" className="text-secondary font-semibold hover:underline">Learn more about Mr. Bones</a> — over 30 years of professional stump grinding. You can also <a href="/gallery" className="text-secondary font-semibold hover:underline">browse our work gallery</a>.
            </p>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 uppercase">
              Need Stump Grinding in {city}?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              <a href="/contact" className="text-secondary hover:underline">Contact Mr. Bones</a> today for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19417802579"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 transition-colors"
                style={{ borderRadius: "10px" }}
              >
                <Phone className="w-5 h-5" />
                (941) 780-2579
              </a>
              <button
                onClick={openQuoteModal}
                className="px-8 py-3 font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
                style={{ borderRadius: "10px" }}
              >
                Free Estimate
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
