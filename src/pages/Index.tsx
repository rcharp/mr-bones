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

import imgJobSite1 from "@/assets/gallery/job-site-1.jpg";
import imgJobSite2 from "@/assets/gallery/job-site-2.jpg";
import imgJobSite4 from "@/assets/gallery/job-site-4.jpg";
import imgJobSite5 from "@/assets/gallery/job-site-5.jpg";
import imgJobSite9 from "@/assets/gallery/job-site-9.jpg";
import imgJobSite10 from "@/assets/gallery/job-site-10.jpg";

const beforeAfterPairs = [
  {
    before: imgJobSite1,
    after: imgJobSite2,
    label: "Residential stump removal — Sarasota",
  },
  {
    before: imgJobSite4,
    after: imgJobSite5,
    label: "Large oak stump — Bradenton",
  },
  {
    before: imgJobSite9,
    after: imgJobSite10,
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
        <BeforeAfterSlider pairs={beforeAfterPairs} />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
