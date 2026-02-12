import { motion } from "framer-motion";
import heroHvac from "@/assets/hero-hvac.jpg";
import heroRepair from "@/assets/hero-ac-repair.jpg";
import heroInstall from "@/assets/hero-ac-install.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceDuct from "@/assets/service-duct-cleaning.jpg";

const images = [heroHvac, heroRepair, heroInstall, serviceMaintenance, serviceDuct, heroHvac];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3">
          See Us In Action
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl overflow-hidden aspect-square group cursor-pointer"
          >
            <img
              src={img}
              alt={`HVAC work ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
