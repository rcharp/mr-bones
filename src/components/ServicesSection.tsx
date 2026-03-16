import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import imgStumpGrinding from "@/assets/gallery/grinder-action.jpg";
import imgRootRemoval from "@/assets/gallery/grinder-roots-yard.jpg";
import imgCommercial from "@/assets/gallery/grinder-open-field.jpg";
import imgStormCleanup from "@/assets/gallery/grinder-roadside-stumps.jpg";

const services = [
  {
    image: imgStumpGrinding,
    title: "Stump Grinding",
    href: "/services/stump-grinding",
    features: [
      "Residential & commercial stumps of any size",
      "Below-grade grinding for replanting",
      "Clean mulch left behind or hauled away",
      "Same-day service available",
    ],
  },
  {
    image: imgRootRemoval,
    title: "Root Removal",
    href: "/services/root-removal",
    features: [
      "Surface root grinding",
      "Prevent sidewalk and driveway damage",
      "Protect foundations and plumbing",
      "Complete root system removal",
    ],
  },
  {
    image: imgCommercial,
    title: "Land Clearing",
    href: "/services/land-clearing",
    features: [
      "Lot clearing for new construction",
      "Multiple stump removal projects",
      "Commercial property clearing",
      "Volume discounts available",
    ],
  },
  {
    image: imgStormCleanup,
    title: "Storm Cleanup",
    href: "/services/storm-cleanup",
    features: [
      "Post-hurricane stump removal",
      "Emergency response available",
      "Fallen tree stump grinding",
      "Property restoration support",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
          Professional Stump Grinding Services
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Over 30 years of experience serving Sarasota, Bradenton & Venice.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden card-elevated border border-secondary/30 group"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <a href={service.href} className="block aspect-[16/9] overflow-hidden cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4 uppercase">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-primary-foreground/80">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-base font-semibold text-secondary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
