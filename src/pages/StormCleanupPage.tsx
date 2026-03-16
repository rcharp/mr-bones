import ServicePage from "@/components/ServicePageLayout";
import useSEO from "@/hooks/useSEO";

const StormCleanupPage = () => {
  useSEO({
    title: "Storm Cleanup Sarasota FL | Mr. Bones Stump Grinding",
    description: "Post-hurricane stump grinding and storm cleanup in Sarasota, Bradenton & Venice. Fast response, fair prices. Call (941) 780-2579.",
    canonical: "https://mrbonesstumpgrinding.com/services/storm-cleanup",
  });

  return (
    <ServicePage
      title="Storm Cleanup"
      subtitle="When Storms Hit, We're Here"
      intro="Florida storms and hurricanes can leave behind broken trees and dangerous stumps. Mr. Bones provides fast, reliable stump grinding to help you restore your property after storm damage."
      sections={[
        {
          heading: "Post-Storm Stump Removal",
          content: "After a hurricane or severe storm, your property may be left with hazardous stumps from fallen or damaged trees. We work quickly to grind these stumps down so you can begin restoring your yard and property safely.",
        },
        {
          heading: "Our Storm Cleanup Services",
          content: [
            "Post-hurricane stump grinding",
            "Emergency/priority scheduling after major storms",
            "Fallen tree stump removal",
            "Coordination with tree removal and debris hauling companies",
            "Insurance documentation support",
            "Multi-stump storm damage cleanup",
          ],
        },
      ]}
      benefits={{
        heading: "Why Call Mr. Bones After a Storm",
        items: [
          "Fast response times when you need it most",
          "30+ years of hurricane cleanup experience in Florida",
          "Fair pricing — we don't price gouge after storms",
          "Equipment for any size stump, even large hardwoods",
          "Help getting your property back to normal quickly",
        ],
      }}
    />
  );
};

export default StormCleanupPage;
