import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import heroServices from "@/assets/hero-services.jpg";
import useSEO from "@/hooks/useSEO";

const ContactPage = () => {
  useSEO({
    title: "Contact Mr. Bones Stump Grinding | Free Estimate | (941) 264-1659",
    description: "Contact Mr. Bones Stump Grinding for a free estimate in Sarasota, Bradenton, Venice, Arcadia & Wauchula. Call (941) 264-1659.",
    canonical: "https://mrbonesstumpgrinding.com/contact",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black">
          <img
            src={heroServices}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get In Touch</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3 uppercase">Contact Us</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Ready for a free estimate? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 uppercase">
                    Let's Talk
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need a <a href="/services/stump-grinding" className="text-secondary hover:underline">single stump ground</a> or <a href="/services/stump-removal" className="text-secondary hover:underline">complete stump removal</a> — give us a call. We offer free on-site estimates with no obligation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+19412641659" className="text-muted-foreground hover:text-secondary transition-colors">
                        (941) 264-1659
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">7821 235th Street East, Myakka, FL 34251</p>
                      <p className="text-muted-foreground text-sm mt-1">Serving Sarasota, Bradenton, Venice, Arcadia & Wauchula</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Open 24 Hours</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3430022874613!2d-82.51508009999999!3d27.271127500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c34173ffffffff%3A0x5cce2dc789445f38!2sMr%20Bones%20Stump%20Grinding!5e0!3m2!1sen!2sus!4v1774914995737!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mr. Bones service area"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
