import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const PalmettoPage = () => {
  useSEO({
    title: "Stump Grinding Palmetto FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Palmetto FL. 30+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/palmetto",
  });

  return (
    <ServiceAreaPage
      city="Palmetto, FL"
      tagline="Your Trusted Stump Grinding Experts"
      intro="Mr. Bones Stump Grinding provides professional stump grinding services in Palmetto and throughout Manatee County. Over 30 years of experience you can count on."
    />
  );
};

export default PalmettoPage;
