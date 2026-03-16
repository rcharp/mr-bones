import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import QuoteForm from "./QuoteForm";
import heroBg from "@/assets/gallery/job-site-8.jpg";
import truckImg from "@/assets/gallery/grinder-truck.jpg";
import reviewer1 from "@/assets/reviewers/reviewer-1.jpg";
import reviewer2 from "@/assets/reviewers/reviewer-2.jpg";
import reviewer3 from "@/assets/reviewers/reviewer-3.jpg";
import reviewer4 from "@/assets/reviewers/reviewer-4.jpg";

const HeroSection = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* Mobile truck image */}
      <div className="lg:hidden">
        <img
          src={truckImg}
          alt="Mr. Bones Stump Grinding equipment on site"
          className="w-full h-auto"
        />
      </div>
      <section className="relative overflow-hidden max-w-[100vw]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg-video.mp4"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 lg:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-heading text-[2.6rem] lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-primary-foreground text-center lg:text-left uppercase">
                  Got a Stump?{" "}
                  <span className="text-secondary-color">We'll Grind It.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed break-words"
              >
                <strong>Mr. Bones Stump Grinding</strong> has been serving Sarasota, Bradenton, and Venice for over 30 years. With three stump grinders, we have the right equipment for any job — big or small. Fast, professional, and affordable.
              </motion.p>

              {/* Social Proof with reviewer photos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {[reviewer1, reviewer2, reviewer3, reviewer4].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Happy customer"
                      className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-base text-primary-foreground/70">Trusted by 150+ happy customers!</span>
                </div>
              </motion.div>

              {/* Review badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 pt-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-primary-foreground">Google</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-sm text-primary-foreground/60">5.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-primary-foreground">Facebook</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-sm text-primary-foreground/60">5.0</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Quote Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="quote-form"
              className="w-full lg:w-[520px] lg:ml-auto"
            >
              <QuoteForm style={{ backgroundColor: "rgba(26, 26, 26, 0.85)" }} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
