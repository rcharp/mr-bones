import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  useSEO({
    title: "Stump Grinding Tips & Blog | Mr. Bones Stump Grinding",
    description: "Expert tips on stump grinding, root removal, tree care, and more from Mr. Bones Stump Grinding in Sarasota, FL.",
    canonical: "https://mrbonesstumpgrinding.com/tips",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Blog</span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary-foreground mt-3 uppercase">
                Tips & Resources
              </h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-6 leading-relaxed">
                Expert advice on stump grinding, tree care, and property maintenance from 30+ years of experience.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden card-elevated border border-border group"
                >
                  <Link to={`/tips/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link to={`/tips/${post.slug}`}>
                      <h2 className="font-heading text-xl font-bold text-foreground uppercase group-hover:text-secondary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/tips/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all pt-1"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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

export default BlogPage;
