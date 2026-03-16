import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/gallery/grinder-action.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">About Us</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground uppercase">
            30+ Years of Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Mr. Bones Stump Grinding has proudly served the Sarasota, Bradenton, and Venice areas for over 30 years. We specialize in professional stump grinding with state-of-the-art equipment. No stump is too big or too small for our team.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With three stump grinders, we have the right equipment for any job. We're fully licensed and insured, and we treat every property with the same care and respect we'd give our own.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-base font-semibold text-foreground">5725 Britannia Dr, Sarasota, FL 34231</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+19417802579" className="text-base font-semibold text-foreground hover:text-secondary transition-colors">
                  (941) 780-2579
                </a>
              </div>
           </div>
          </div>
          <a href="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mt-2">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Mr. Bones stump grinder in action"
                className="w-full h-full object-cover"
              />
            </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
