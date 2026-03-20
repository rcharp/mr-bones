import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const StumpGrindingPage = () => {
  useSEO({
    title: "Stump Grinding Sarasota FL | Mr. Bones | 31+ Years",
    description: "Professional stump grinding in Sarasota, Bradenton, Venice, Arcadia & Wauchula. Any size stump, same-day service available. Licensed & insured. Call (941) 780-2579.",
    canonical: "https://mrbonesstumpgrinding.com/services/stump-grinding",
  });

  return (
    <ServicePage
      title="Stump Grinding"
      subtitle="Our Specialty"
      intro="Mr. Bones Stump Grinding has been the trusted name in professional stump grinding across Sarasota, Bradenton, Venice, Arcadia, and Wauchula for over 31 years. Providing professional stump grinding at reasonable prices. No stump is too big or too small."
      sections={[
        {
          heading: "Professional Stump Grinding Services",
          content: "Whether you've had a tree removed, dealt with storm damage, or just have an old stump that's been an eyesore for years — we'll grind it down below grade quickly and affordably. With three stump grinders in our fleet, we always have the right equipment for the job.",
        },
        {
          heading: "What We Offer",
          content: [
            "Residential stump grinding — single stumps or multiple on your property",
            "Commercial stump grinding — HOAs, apartment complexes, business properties",
            "Below-grade grinding — deep enough for replanting grass, sod, or a new tree",
            "Mulch cleanup — we can leave the mulch, spread it, or haul it away",
            "Same-day service — available when schedules allow",
            "Free on-site estimates — no obligation, no pressure",
          ],
        },
        {
          heading: "Why Choose Mr. Bones?",
          content: [
            "Over 31 years of stump grinding experience",
            "Three stump grinders for any size job",
            "Fully licensed and insured",
            "Professional stump grinding at reasonable prices",
            "Clean, professional work every time",
            "Locally owned and operated",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Stump Grinding",
        items: [
          "Eliminate tripping hazards and improve yard safety",
          "Prevent termites, ants, and other pests from nesting",
          "Reclaim usable yard space for landscaping or construction",
          "Improve your property's curb appeal and value",
          "Stop unwanted regrowth and root sprouting",
          "Quick, non-invasive process — no heavy excavation needed",
        ],
      }}
    />
  );
};

export default StumpGrindingPage;
