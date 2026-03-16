import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface BeforeAfterPair {
  before: string;
  after: string;
  label?: string;
}

interface BeforeAfterSliderProps {
  pairs: BeforeAfterPair[];
}

const Slider = ({ before, after, label }: BeforeAfterPair) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After (full background) */}
        <img
          src={after}
          alt="After stump grinding"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Before stump grinding"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${containerRef.current?.offsetWidth || 0}px`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border-2 border-primary-foreground flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary-foreground">
              <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-foreground/80 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full z-20 uppercase tracking-wider">
          Before
        </span>
        <span className="absolute top-3 right-3 bg-secondary/90 text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full z-20 uppercase tracking-wider">
          After
        </span>
      </div>
      {label && (
        <p className="text-sm text-muted-foreground text-center">{label}</p>
      )}
    </div>
  );
};

const BeforeAfterSlider = ({ pairs }: BeforeAfterSliderProps) => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-base font-semibold text-secondary uppercase tracking-wider">Results</span>
        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mt-3 uppercase">
          Before &amp; After
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Drag the slider to see the difference our stump grinding makes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pairs.map((pair, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Slider {...pair} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSlider;
