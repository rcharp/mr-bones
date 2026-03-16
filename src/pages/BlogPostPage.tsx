import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useSEO({
    title: post ? `${post.title} | Mr. Bones Stump Grinding` : "Blog | Mr. Bones Stump Grinding",
    description: post?.excerpt || "Stump grinding tips from Mr. Bones.",
    canonical: `https://mrbonesstumpgrinding.com/tips/${slug}`,
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground uppercase">Post Not Found</h1>
          <p className="text-muted-foreground mt-4">The blog post you're looking for doesn't exist.</p>
          <Link to="/tips" className="inline-flex items-center gap-2 text-secondary font-semibold mt-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero image */}
        <section className="relative h-[300px] lg:h-[400px] overflow-hidden">
          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/tips"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:gap-3 transition-all mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground uppercase leading-tight">
                  {post.title}
                </h1>

                <div className="mt-10 space-y-6">
                  {post.content.map((paragraph, i) => {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                        {parts.map((part, j) =>
                          part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={j} className="text-foreground font-semibold">
                              {part.slice(2, -2)}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  })}
                </div>

                {/* CTA inline */}
                <div className="mt-12 p-8 rounded-2xl border-2 border-secondary/30 text-center" style={{ backgroundColor: "#1a1a1a" }}>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground uppercase mb-3">
                    Need a Stump Ground?
                  </h3>
                  <p className="text-primary-foreground/70 mb-6">
                    Call us today for a free, no-obligation quote.
                  </p>
                  <a
                    href="tel:+19417802579"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
                    style={{ borderRadius: "10px" }}
                  >
                    <Phone className="w-5 h-5" />
                    (941) 780-2579
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
