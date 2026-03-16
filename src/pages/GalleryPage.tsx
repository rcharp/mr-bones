import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import imgStumpGrinding from "@/assets/service-stump-grinding.jpg";
import imgCommercial from "@/assets/service-commercial.jpg";
import imgRootRemoval from "@/assets/service-root-removal.jpg";
import imgStormCleanup from "@/assets/service-storm-cleanup.jpg";
import heroBg from "@/assets/hero-bg.png";
import truckImg from "@/assets/palmetto-point-truck.png";

const images = [
  { src: heroBg, alt: "Stump grinding in action" },
  { src: imgStumpGrinding, alt: "Before and after stump grinding" },
  { src: imgCommercial, alt: "Commercial land clearing project" },
  { src: imgRootRemoval, alt: "Root removal service" },
  { src: imgStormCleanup, alt: "Storm cleanup stump removal" },
  { src: truckImg, alt: "Mr. Bones equipment on site" },
];

const GalleryPage = () => {
  useSEO({
    title: "Project Gallery | Mr. Bones Stump Grinding | Sarasota FL",
    description: "Browse photos of our stump grinding projects in Sarasota, Bradenton & Venice. See our quality work firsthand.",
    canonical: "https://mrbonesstumpgrinding.com/gallery",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pb-28 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Work</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
                Project Gallery
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Browse photos from our stump grinding projects across Sarasota and Manatee County.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
