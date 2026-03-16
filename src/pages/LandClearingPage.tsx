import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const LandClearingPage = () => {
  useSEO({
    title: "Land Clearing Sarasota FL | Mr. Bones Stump Grinding",
    description: "Professional land clearing and multi-stump removal in Sarasota, Bradenton & Venice. Volume discounts available. Call (941) 780-2579.",
    canonical: "https://mrbonesstumpgrinding.com/services/land-clearing",
  });

  return (
    <ServicePage
      title="Land Clearing"
      subtitle="Large Jobs Welcome"
      intro="Clearing a lot for new construction or development? Mr. Bones handles multi-stump removal and land clearing projects of any size. We offer volume discounts for large jobs."
      sections={[
        {
          heading: "Commercial & Residential Land Clearing",
          content: "Whether you're a homeowner clearing a backyard, a contractor preparing a lot for new construction, or a developer clearing acreage, we have the equipment and experience to get the job done efficiently.",
        },
        {
          heading: "Our Land Clearing Services",
          content: [
            "Multi-stump grinding for cleared lots",
            "New construction site preparation",
            "HOA and community property clearing",
            "Vacant lot cleanup and maintenance",
            "Volume pricing for 10+ stumps",
            "Coordination with tree removal companies",
          ],
        },
      ]}
      benefits={{
        heading: "Why Choose Mr. Bones for Land Clearing",
        items: [
          "Three stump grinders — the right machine for every situation",
          "Volume discounts keep large projects affordable",
          "30+ years of experience with commercial projects",
          "Efficient turnaround for time-sensitive construction schedules",
          "Clean, professional results ready for next phase of construction",
        ],
      }}
    />
  );
};

export default LandClearingPage;
