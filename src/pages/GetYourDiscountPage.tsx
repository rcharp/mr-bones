import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Ticket } from "lucide-react";
import logo from "@/assets/logo-circle.png";
import useSEO from "@/hooks/useSEO";

const GetYourDiscountPage = () => {
  useSEO({
    title: "Get Your Discount | Mr. Bones Stump Grinding",
    description: "Claim your exclusive discount on stump grinding services from Mr. Bones Stump Grinding. Serving Sarasota, Bradenton, Venice, Arcadia & Wauchula.",
    canonical: "https://mr-bones.lovable.app/get-your-discount",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms & conditions.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/c53B26PcZFpdhgC5tp5U/webhook-trigger/e8749160-3bed-4907-b830-876154df7502",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: formData.fullName,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed");
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl p-8 space-y-6"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {isSubmitted ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 rounded-full mx-auto overflow-hidden" style={{ boxShadow: "0 0 0 0.5px rgba(255,255,255,0.3)" }}>
              <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary-foreground uppercase">Thank You!</h2>
            <p className="text-primary-foreground/70">We'll be in touch shortly with your discount details.</p>
          </div>
        ) : (
          <>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full mx-auto overflow-hidden" style={{ boxShadow: "0 0 0 0.5px rgba(255,255,255,0.3)" }}>
                <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-primary-foreground">Mr. Bones Stump Grinding</h1>
              <p className="text-secondary text-lg font-semibold">Get Your Discount!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary-foreground/80">
                  Full Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary-foreground/80">
                  Phone <span className="text-secondary">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(888) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^\d()\-\s+]/g, "") })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary-foreground/80">
                  Short summary of the work you need! <span className="text-secondary">*</span>
                </label>
                <textarea
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                    agreed ? "bg-secondary border-secondary" : "border-white/40"
                  }`}
                >
                  {agreed && <div className="w-2 h-2 rounded-full bg-secondary-foreground" />}
                </div>
                <span className="text-xs text-primary-foreground/60 leading-relaxed">
                  I agree to the terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-secondary text-secondary-foreground font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Ticket className="w-5 h-5" />
                {isSubmitting ? "SUBMITTING..." : "GET MY DISCOUNT"}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default GetYourDiscountPage;
