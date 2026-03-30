import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const ArcadiaPage = () => {
  useSEO({
    title: "Stump Grinding Arcadia FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Arcadia FL. 31+ years experience, licensed & insured. Call (941) 264-1659 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/arcadia",
  });

  return (
    <ServiceAreaPage
      city="Arcadia, FL"
      tagline="Professional Stump Grinding at Reasonable Prices"
      intro="Mr. Bones Stump Grinding proudly serves Arcadia and DeSoto County. With over 31 years of experience and three stump grinders, no job is too big or too small."
    />
  );
};

export default ArcadiaPage;
