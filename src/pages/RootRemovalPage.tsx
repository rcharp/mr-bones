import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const RootRemovalPage = () => {
  useSEO({
    title: "Root Removal Sarasota FL | Mr. Bones Stump Grinding",
    description: "Professional root removal and grinding in Sarasota & Bradenton. Protect driveways, foundations & plumbing. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/services/root-removal",
  });

  return (
    <ServicePage
      title="Root Removal"
      subtitle="Protect Your Property"
      intro="Exposed or invasive tree roots can crack driveways, damage foundations, and disrupt plumbing. Mr. Bones grinds surface roots to protect your property and restore your yard."
      sections={[
        {
          heading: "Our Root Removal Process",
          content: "We use specialized grinding equipment to remove surface roots without damaging surrounding landscaping. Our approach is targeted and precise — we grind down the problematic roots while leaving the rest of your yard intact.",
        },
        {
          heading: "Common Root Problems We Solve",
          content: [
            "Roots lifting sidewalks and driveways",
            "Roots threatening foundations and retaining walls",
            "Surface roots creating tripping hazards",
            "Roots invading plumbing and sewer lines",
            "Roots interfering with new construction or landscaping",
            "Roots causing uneven ground and mowing difficulties",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Root Removal",
        items: [
          "Prevent costly damage to driveways, walkways, and foundations",
          "Eliminate tripping hazards in your yard",
          "Create a smooth, even surface for mowing",
          "Protect underground plumbing and utilities",
          "Prepare areas for new landscaping or construction",
        ],
      }}
    />
  );
};

export default RootRemovalPage;
