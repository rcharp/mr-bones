import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const VenicePage = () => {
  useSEO({
    title: "Stump Grinding Venice FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Venice FL. 30+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/venice",
  });

  return (
    <ServiceAreaPage
      city="Venice, FL"
      tagline="Professional Stump Grinding"
      intro="Mr. Bones Stump Grinding proudly serves Venice and south Sarasota County. With over 30 years of experience and three stump grinders, no job is too big or too small."
    />
  );
};

export default VenicePage;
