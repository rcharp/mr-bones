import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

import imgStumpBefore from "@/assets/gallery/stump-before.jpg";
import imgGrinderField from "@/assets/gallery/grinder-field.jpg";
import imgGrinderBigStump from "@/assets/gallery/grinder-big-stump.jpg";
import imgGrinderPark from "@/assets/gallery/grinder-park.jpg";
import imgGrinderBackyardLargeStump from "@/assets/gallery/grinder-backyard-large-stump.jpg";
import imgGrinderRoadsideCleanup from "@/assets/gallery/grinder-roadside-cleanup.jpg";

const beforeAfterPairs = [
  {
    before: imgStumpBefore,
    after: imgGrinderField,
    label: "Large oak stump — Sarasota",
  },
  {
    before: imgGrinderBigStump,
    after: imgGrinderPark,
    label: "Tropical garden stump — Bradenton",
  },
  {
    before: imgGrinderBackyardLargeStump,
    after: imgGrinderRoadsideCleanup,
    label: "Backyard stump grinding — Venice",
  },
];

const Index = () => {
  useSEO({
    title: "Mr. Bones Stump Grinding | Sarasota FL | 30+ Years",
    description: "Professional stump grinding in Sarasota, Bradenton & Venice FL. 30+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <SpecialOffers />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <BeforeAfterSlider pairs={beforeAfterPairs} />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
