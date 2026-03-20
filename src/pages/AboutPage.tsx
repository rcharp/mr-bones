import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Check, Phone, ArrowRight, MapPin } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import heroServices from "@/assets/hero-services.jpg";
import ownerTroy from "@/assets/owner-troy.jpg";
import useSEO from "@/hooks/useSEO";

const AboutPage = () => {
  const { openQuoteModal } = useQuoteModal();

  useSEO({
    title: "About Mr. Bones Stump Grinding | 31+ Years in Sarasota FL",
    description: "Learn about Mr. Bones Stump Grinding — over 31 years of professional stump grinding at reasonable prices in Sarasota, Bradenton, Venice, Arcadia & Wauchula. Call (941) 780-2579.",
    canonical: "https://mrbonesstumpgrinding.com/about",
  });

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
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Who We Are</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3 uppercase">About Mr. Bones</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Providing professional stump grinding at reasonable prices for over 31 years in Southwest Florida.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={ownerTroy}
                  alt="Troy — Owner of Mr. Bones Stump Grinding"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Story</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground uppercase">31 Years of Experience</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by Troy, Mr. Bones Stump Grinding has been serving Sarasota, Bradenton, Venice, Arcadia, and Wauchula for over 31 years. Providing professional stump grinding at reasonable prices — it's what we do best.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With three stump grinders in our fleet, Troy and his team have the right equipment for any job. From a single backyard stump to complete stump removal projects, we bring the same level of professionalism and care to every job.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground uppercase">
                  State-of-the-Art Equipment & Expert Service
                </h2>
                <ul className="space-y-3">
                  {[
                    "Three professional stump grinders for any size job",
                    "Over 31 years of industry experience",
                    "Fully licensed and insured",
                    "Professional stump grinding at reasonable prices",
                    "Same-day service available",
                    "156 five-star reviews — we guarantee a positive experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-primary-foreground/80">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase">Our Services</h2>
                <p className="text-muted-foreground mb-6">We specialize in stump grinding and stump removal.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Stump Grinding — any size, any species", href: "/services/stump-grinding" },
                    { label: "Stump Removal — complete removal & root grinding", href: "/services/stump-removal" },
                  ].map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                        <ArrowRight className="w-4 h-4 text-secondary shrink-0" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase">Areas We Serve</h2>
                <p className="text-muted-foreground mb-6">Proudly serving these communities and beyond.</p>
                <ul className="space-y-3">
                  {[
                    { label: "Sarasota, FL", href: "/areas/sarasota" },
                    { label: "Bradenton, FL", href: "/areas/bradenton" },
                    { label: "Venice, FL", href: "/areas/venice" },
                    { label: "Arcadia, FL", href: "/areas/arcadia" },
                    { label: "Wauchula, FL", href: "/areas/wauchula" },
                  ].map((a) => (
                    <li key={a.href}>
                      <a href={a.href} className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
