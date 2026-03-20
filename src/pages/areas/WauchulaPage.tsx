import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const WauchulaPage = () => {
  useSEO({
    title: "Stump Grinding Wauchula FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Wauchula FL. 31+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/wauchula",
  });

  return (
    <ServiceAreaPage
      city="Wauchula, FL"
      tagline="Professional Stump Grinding at Reasonable Prices"
      intro="Mr. Bones Stump Grinding serves Wauchula and Hardee County. With over 31 years of experience, we provide professional stump grinding and removal at reasonable prices."
    />
  );
};

export default WauchulaPage;
