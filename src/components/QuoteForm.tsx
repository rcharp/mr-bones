import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

interface QuoteFormProps {
  showHeader?: boolean;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteForm = ({ showHeader = true, compact = false, className = "", style }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    helpWith: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.helpWith.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual webhook when ready)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`rounded-2xl border-2 ${compact ? 'p-5' : 'p-8'} shadow-2xl flex flex-col items-center justify-center text-center ${compact ? 'min-h-[300px]' : 'min-h-[400px]'} ${className}`}
        style={{
          backgroundColor: "#1a1a1a",
          borderColor: "hsl(25 95% 53%)",
          ...style,
        }}
      >
        <h2 className="font-heading font-bold text-white text-3xl mb-4 uppercase">THANK YOU!</h2>
        <p className="text-white/80 text-lg">We got your request and will be in touch shortly!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border-2 ${compact ? 'p-5 space-y-3' : 'p-8 space-y-6'} shadow-2xl ${className}`}
      style={{
        backgroundColor: "#1a1a1a",
        borderColor: "hsl(25 95% 53%)",
        ...style,
      }}
    >
      {showHeader && (
        <div className={`text-center ${compact ? 'space-y-2 pb-1' : 'space-y-3 pb-2'}`}>
          <img src={logo} alt="Mr. Bones Stump Grinding" className="w-16 h-16 mx-auto" />
          <h2 className={`font-heading font-bold text-white ${compact ? 'text-2xl mt-1' : 'text-2xl'} uppercase`}>
            Free Estimate
          </h2>
        </div>
      )}

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="fullName" className="text-white font-semibold">
          Full Name <span className="text-secondary">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="John Smith"
          required
          maxLength={100}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="phone" className="text-white font-semibold">
          Phone <span className="text-secondary">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="numeric"
          placeholder="(941) 123-4567"
          maxLength={10}
          value={formData.phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
            setFormData({ ...formData, phone: digits });
          }}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className={compact ? "space-y-1" : "space-y-2"}>
        <Label htmlFor="helpWith" className="text-white font-semibold">
          Tell us about the job <span className="text-secondary">*</span>
        </Label>
        <Textarea
          id="helpWith"
          placeholder="How many stumps? How big? Any access issues? We'll get back to you ASAP!"
          required
          maxLength={1000}
          rows={compact ? 2 : 4}
          value={formData.helpWith}
          onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold ${compact ? 'text-base py-4' : 'text-lg py-6'} bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity`}
        style={{ borderRadius: "10px" }}
      >
        {isSubmitting ? "Sending..." : "Get Free Estimate"}
      </Button>
    </form>
  );
};

export default QuoteForm;
