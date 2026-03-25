import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo-circle.png";
import useSEO from "@/hooks/useSEO";

const ratings = [
  { stars: 5, label: "Excellent" },
  { stars: 4, label: "Great" },
  { stars: 3, label: "Okay" },
  { stars: 2, label: "Poor" },
  { stars: 1, label: "Terrible" },
];

const ReviewPage = () => {
  const [view, setView] = useState<"rating" | "form" | "thanks">("rating");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  useSEO({
    title: "Leave a Review | Mr. Bones Stump Grinding",
    description: "Share your experience with Mr. Bones Stump Grinding. Your feedback helps us improve and helps others find quality stump grinding in Sarasota.",
    canonical: "https://mrbonesstumpgrinding.com/review",
  });

  const handleRating = (stars: number) => {
    if (stars >= 4) {
      window.location.href = "https://share.google/1sQ79CbroLTQwvUdm";
    } else {
      setView("form");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/c53B26PcZFpdhgC5tp5U/webhook-trigger/MWN8qUIVgyRb9FloZsaO",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed");
      setView("thanks");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md relative overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "rating" && (
            <motion.div
              key="rating"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 shadow-md">
                <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
                How was your experience?
              </h1>
              <p className="text-muted-foreground mb-8">We'd love to hear your feedback</p>

              <div className="space-y-3">
                {ratings.map((r) => (
                  <button
                    key={r.stars}
                    onClick={() => handleRating(r.stars)}
                    className="w-full flex items-center gap-4 px-5 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-left"
                  >
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i <= r.stars ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground font-medium">{r.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {view === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 shadow-md">
                <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
                Tell us more
              </h1>
              <p className="text-muted-foreground mb-8">
                We're sorry to hear that. Please let us know how we can improve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: digits });
                  }}
                  required
                  className="h-12"
                />
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-semibold bg-secondary text-secondary-foreground hover:opacity-90"
                  style={{ borderRadius: "10px" }}
                >
                  {isSubmitting ? "Sending..." : "Submit Feedback"}
                </Button>
                <button
                  type="button"
                  onClick={() => setView("rating")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block"
                >
                  Back to ratings
                </button>
              </form>
            </motion.div>
          )}

          {view === "thanks" && (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 shadow-md">
                <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h1>
              <p className="text-muted-foreground">Your feedback has been submitted. We appreciate you taking the time.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReviewPage;
