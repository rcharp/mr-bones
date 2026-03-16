import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const BradentonPage = () => {
  useSEO({
    title: "Stump Grinding Bradenton FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Bradenton FL. 30+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/bradenton",
  });

  return (
    <ServiceAreaPage
      city="Bradenton, FL"
      tagline="Your Trusted Stump Grinding Experts"
      intro="Mr. Bones Stump Grinding provides fast, professional stump grinding services throughout Bradenton and Manatee County. We've been serving this community for over 30 years."
    />
  );
};

export default BradentonPage;
