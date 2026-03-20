import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const StumpRemovalPage = () => {
  useSEO({
    title: "Stump Removal Sarasota FL | Mr. Bones Stump Grinding",
    description: "Professional stump removal and root grinding in Sarasota, Bradenton, Venice, Arcadia & Wauchula. Protect driveways, foundations & plumbing. Call (941) 780-2579.",
    canonical: "https://mrbonesstumpgrinding.com/services/stump-removal",
  });

  return (
    <ServicePage
      title="Stump Removal"
      subtitle="Complete Removal"
      intro="Need the entire stump gone? Mr. Bones provides complete stump removal including root system grinding. We protect your property while eliminating stumps entirely — driveways, foundations, and plumbing stay safe."
      sections={[
        {
          heading: "Our Stump Removal Process",
          content: "We use specialized grinding equipment to completely remove stumps and their root systems without damaging surrounding landscaping. Our approach is targeted and precise — we remove the entire stump while leaving the rest of your yard intact.",
        },
        {
          heading: "Common Problems We Solve",
          content: [
            "Stumps creating tripping hazards in your yard",
            "Roots lifting sidewalks and driveways",
            "Roots threatening foundations and retaining walls",
            "Roots invading plumbing and sewer lines",
            "Old stumps attracting pests and termites",
            "Stumps interfering with new construction or landscaping",
          ],
        },
      ]}
      benefits={{
        heading: "Benefits of Stump Removal",
        items: [
          "Complete elimination of the stump and root system",
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

export default StumpRemovalPage;
