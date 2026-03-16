import ServiceAreaPage from "@/components/ServiceAreaLayout";
import useSEO from "@/hooks/useSEO";

const NorthPortPage = () => {
  useSEO({
    title: "Stump Grinding North Port FL | Mr. Bones | Free Estimates",
    description: "Professional stump grinding in North Port FL. 30+ years experience, licensed & insured. Call (941) 780-2579 for a free estimate.",
    canonical: "https://mrbonesstumpgrinding.com/areas/north-port",
  });

  return (
    <ServiceAreaPage
      city="North Port, FL"
      tagline="Professional Stump Grinding"
      intro="Mr. Bones Stump Grinding serves North Port and the surrounding areas of Sarasota County. We bring 30+ years of stump grinding expertise to every job."
    />
  );
};

export default NorthPortPage;
