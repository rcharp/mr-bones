import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
            31 Years of Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Providing professional stump grinding at reasonable prices. Mr. Bones Stump Grinding has proudly served the Sarasota, Bradenton, Venice, Arcadia, and Wauchula areas for over 31 years. We specialize in professional stump grinding and stump removal with state-of-the-art equipment. No stump is too big or too small for our team.
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
                <div className="text-base font-semibold text-foreground">7821 235th Street East, Myakka, FL 34251</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+19412641659" className="text-base font-semibold text-foreground hover:text-secondary transition-colors">
                  (941) 264-1659
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3430022874613!2d-82.51508009999999!3d27.271127500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c34173ffffffff%3A0x5cce2dc789445f38!2sMr%20Bones%20Stump%20Grinding!5e0!3m2!1sen!2sus!4v1774914995737!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mr. Bones Stump Grinding location"
                className="w-full"
              />
            </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
