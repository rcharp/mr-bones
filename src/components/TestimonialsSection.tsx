import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

const FACEBOOK_URL = "https://www.facebook.com/mr.bonesstump/";

const testimonials = [
  {
    text: "Mr. Bones came out and ground three stumps in my backyard in under two hours. Very professional, fair price, and left the yard looking great. I've been recommending him to everyone in my neighborhood.",
    name: "Mike R.",
    rating: 5,
    source: "Google",
  },
  {
    text: "Had a huge oak stump that another company said was too big. Mr. Bones showed up with the right equipment and knocked it out no problem. 30 years of experience really shows. Highly recommend!",
    name: "Sarah T.",
    rating: 5,
    source: "Google",
  },
  {
    text: "After Hurricane Ian, we had multiple stumps that needed grinding. Mr. Bones was responsive, showed up when he said he would, and his prices were very fair. Will definitely use again.",
    name: "James L.",
    rating: 5,
    source: "Google",
  },
  {
    text: "Fast, professional, and affordable. What more could you ask for? Mr. Bones ground down 5 stumps on our commercial property and did a fantastic job. The area was clean when he left.",
    name: "Karen D.",
    rating: 5,
    source: "Facebook",
  },
  {
    text: "Called Mr. Bones for a same-day estimate and he was out within hours. Ground the stump down below grade and cleaned up everything. Best price I found in the area. Highly recommend!",
    name: "David M.",
    rating: 5,
    source: "Google",
  },
  {
    text: "We had six palm stumps and two oak stumps removed. Mr. Bones handled it all in one visit. Very experienced, you can tell he's been doing this a long time. Will call again for sure.",
    name: "Linda W.",
    rating: 5,
    source: "Google",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-base text-muted-foreground font-medium">5-Star Rated</span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-10 card-elevated border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/15 absolute top-8 right-8" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center font-heading font-bold text-secondary text-base">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">{testimonials[current].name}</div>
                  <div className="text-sm text-muted-foreground">via {testimonials[current].source}</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-secondary hover:underline"
            >
              See All Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
