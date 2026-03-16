import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ReviewPage = () => {
  useSEO({
    title: "Leave a Review | Mr. Bones Stump Grinding",
    description: "Share your experience with Mr. Bones Stump Grinding. Your feedback helps us improve and helps others find quality stump grinding in Sarasota.",
    canonical: "https://mrbonesstumpgrinding.com/review",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">We Appreciate You</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
              Leave Us A Review
            </h1>
            <p className="text-muted-foreground mt-4">
              Your feedback helps us improve and helps others find quality stump grinding service.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border card-elevated p-8 text-center">
            <p className="text-muted-foreground text-lg mb-6">
              We'd love to hear about your experience! Please leave us a review on Facebook:
            </p>
            <a
              href="https://www.facebook.com/mr.bonesstump/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
              style={{ borderRadius: "10px" }}
            >
              Review on Facebook
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewPage;
