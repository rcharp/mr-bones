import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const SarasotaPage = () => {
  useSEO({
    title: "Stump Grinding Sarasota FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in Sarasota FL. 31+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/sarasota",
  });

  return (
    <ServiceAreaPage
      city="Sarasota, FL"
      tagline="Your Trusted Stump Grinding Experts"
      intro="Mr. Bones Stump Grinding has been serving Sarasota for over 31 years. Whether you need a single stump ground or complete stump removal, we have the equipment and experience to get the job done right."
    />
  );
};

export default SarasotaPage;
