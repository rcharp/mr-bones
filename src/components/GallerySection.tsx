import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgGrinderField from "@/assets/gallery/grinder-field.jpg";
import imgGrinderResidential from "@/assets/gallery/grinder-residential.jpg";
import imgGrinderPark from "@/assets/gallery/grinder-park.jpg";
import imgGrinderTruck from "@/assets/gallery/grinder-truck.jpg";
import imgGrinderTruck2 from "@/assets/gallery/grinder-truck-2.jpg";
import imgBigOrSmall from "@/assets/gallery/big-or-small-promo.jpg";

const images = [imgGrinderTruck, imgGrinderResidential, imgGrinderField, imgGrinderPark, imgGrinderTruck2, imgBigOrSmall];

const GallerySection = () => (
  <section className="py-20 lg:py-28 section-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
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
              alt={`Stump grinding project ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link to="/gallery">
          <Button variant="secondary" size="lg" className="group text-lg px-10 py-6 h-auto">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
