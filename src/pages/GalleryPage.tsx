import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import imgGrinderField from "@/assets/gallery/grinder-field.jpg";
import imgGrinderResidential from "@/assets/gallery/grinder-residential.jpg";
import imgGrinderPark from "@/assets/gallery/grinder-park.jpg";
import imgGrinderTruck from "@/assets/gallery/grinder-truck.jpg";
import imgGrinderBigStump from "@/assets/gallery/grinder-big-stump.jpg";
import imgGrinderCommercial from "@/assets/gallery/grinder-commercial.jpg";
import imgGrinderCondo from "@/assets/gallery/grinder-condo.jpg";
import imgGrinderTrailer from "@/assets/gallery/grinder-trailer-setup.jpg";
import imgStumpBefore from "@/assets/gallery/stump-before.jpg";
import imgGrinderFerns from "@/assets/gallery/grinder-ferns.jpg";
import imgGrinderBridge from "@/assets/gallery/grinder-bridge.jpg";
import imgGrinderSp8018 from "@/assets/gallery/grinder-sp8018.jpg";
import imgGrinderLandscaping from "@/assets/gallery/grinder-landscaping.jpg";
import imgGrinderRanch from "@/assets/gallery/grinder-ranch.jpg";
import imgGrinderAction from "@/assets/gallery/grinder-action.jpg";
import imgGrinderSmallStump from "@/assets/gallery/grinder-small-stump.jpg";
import imgGrinderHillside from "@/assets/gallery/grinder-hillside.jpg";
import imgGrinderLongView from "@/assets/gallery/grinder-long-view.jpg";
import imgGrinderRootsYard from "@/assets/gallery/grinder-roots-yard.jpg";
import imgGrinderWoods from "@/assets/gallery/grinder-woods.jpg";
import imgGrinderSideProfile from "@/assets/gallery/grinder-side-profile.jpg";
import imgGrinderBridge2 from "@/assets/gallery/grinder-bridge-2.jpg";
import imgGrinderGardenCut from "@/assets/gallery/grinder-garden-cut.jpg";
import imgGrinderOpenField from "@/assets/gallery/grinder-open-field.jpg";
import imgGrinderRoadsideStumps from "@/assets/gallery/grinder-roadside-stumps.jpg";
import imgGrinderRoadsideCleanup from "@/assets/gallery/grinder-roadside-cleanup.jpg";
import imgGrinderRoadworkSite from "@/assets/gallery/grinder-roadwork-site.jpg";
import imgGrinderBackyardLargeStump from "@/assets/gallery/grinder-backyard-large-stump.jpg";
import imgGrinderTrunkClose from "@/assets/gallery/grinder-trunk-close.jpg";
import imgGrinderFenceLine from "@/assets/gallery/grinder-fence-line.jpg";
import imgGrinderYardSide from "@/assets/gallery/grinder-yard-side.jpg";
import imgTruckTrailerRig from "@/assets/gallery/truck-trailer-rig.jpg";
import imgJobSite1 from "@/assets/gallery/job-site-1.jpg";
import imgJobSite2 from "@/assets/gallery/job-site-2.jpg";
import imgJobSite3 from "@/assets/gallery/job-site-3.jpg";
import imgJobSite4 from "@/assets/gallery/job-site-4.jpg";
import imgJobSite5 from "@/assets/gallery/job-site-5.jpg";
import imgJobSite6 from "@/assets/gallery/job-site-6.jpg";
import imgJobSite7 from "@/assets/gallery/job-site-7.jpg";
import imgJobSite8 from "@/assets/gallery/job-site-8.jpg";
import imgJobSite9 from "@/assets/gallery/job-site-9.jpg";
import imgJobSite10 from "@/assets/gallery/job-site-10.jpg";

const images = [
  { src: imgJobSite6, alt: "Mr. Bones stump grinding on recent job site" },
  { src: imgGrinderTruck, alt: "Mr. Bones grinder with truck on residential job" },
  { src: imgJobSite3, alt: "Stump grinding project — new upload" },
  { src: imgGrinderBigStump, alt: "Large stump grinding in tropical garden" },
  { src: imgJobSite7, alt: "Root removal and stump grinding work" },
  { src: imgGrinderAction, alt: "Mr. Bones grinder in action on oak stump" },
  { src: imgJobSite8, alt: "Mr. Bones grinder on job — wide shot" },
  { src: imgGrinderResidential, alt: "Stump grinding at residential property" },
  { src: imgJobSite1, alt: "Before — stump ready for grinding" },
  { src: imgJobSite2, alt: "After — clean yard post grind" },
  { src: imgGrinderFerns, alt: "Mr. Bones grinder near fern garden" },
  { src: imgGrinderHillside, alt: "Stump grinding on hillside property" },
  { src: imgJobSite4, alt: "Large stump before removal" },
  { src: imgJobSite5, alt: "Clean result after stump grinding" },
  { src: imgGrinderLongView, alt: "Long-view shot of grinder on residential lot" },
  { src: imgGrinderRootsYard, alt: "Stump grinding with exposed roots in yard" },
  { src: imgJobSite9, alt: "Backyard stump before grinding" },
  { src: imgJobSite10, alt: "Backyard stump after grinding" },
  { src: imgGrinderWoods, alt: "Mr. Bones stump grinder in wooded property" },
  { src: imgGrinderSideProfile, alt: "Side profile of grinder working through mulch" },
  { src: imgGrinderRoadsideStumps, alt: "Roadside project with multiple stumps" },
  { src: imgGrinderRoadsideCleanup, alt: "Roadside stump cleanup and grind work" },
  { src: imgGrinderRoadworkSite, alt: "Roadwork-adjacent stump grinding site" },
  { src: imgGrinderBackyardLargeStump, alt: "Large backyard stump before final grind" },
  { src: imgGrinderTrunkClose, alt: "Close-up trunk grind with Mr. Bones grinder" },
  { src: imgGrinderFenceLine, alt: "Fence-line stump removal project" },
  { src: imgGrinderYardSide, alt: "Side-yard stump removal near landscaping" },
  { src: imgTruckTrailerRig, alt: "Mr. Bones truck and trailer rig" },
  { src: imgGrinderCommercial, alt: "Commercial stump grinding job" },
  { src: imgGrinderRanch, alt: "Carlton grinder on ranch property" },
  { src: imgGrinderBridge, alt: "Stump grinding near bridge" },
  { src: imgGrinderBridge2, alt: "Second angle of bridge-side stump grinding" },
  { src: imgGrinderCondo, alt: "Stump removal at condo complex" },
  { src: imgGrinderSmallStump, alt: "Mr. Bones grinding small stump" },
  { src: imgGrinderSp8018, alt: "Carlton SP8018 TRX stump grinder" },
  { src: imgGrinderLandscaping, alt: "Stump grinding in landscaped area" },
  { src: imgGrinderGardenCut, alt: "Garden-area stump cut and grind" },
  { src: imgGrinderOpenField, alt: "Open-field stump grinding service" },
  { src: imgGrinderTrailer, alt: "Mr. Bones equipment with trailer" },
  { src: imgStumpBefore, alt: "Large oak stump before grinding" },
  { src: imgGrinderField, alt: "Stump grinding in open field" },
  { src: imgGrinderPark, alt: "Completed stump grinding at park" },
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
                  transition={{ delay: i * 0.04 }}
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
