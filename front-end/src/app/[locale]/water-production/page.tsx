import { useTranslations } from "next-intl";
import Banner from "@/app/components/Banner/HeroBanner"; // Assuming you have a reusable Banner component
import "aos/dist/aos.css";
import WaterProducts from "@/app/components/Company/WaterProducts";

const WaterProductionPage = () => {
  const t = useTranslations("waterProduction");

  const bannerData = {
    imageSrc: "/images/company/water-production.jpg",
    title: t("title"),
    breadcrumb: [
      { label: t("breadcrumb.home"), link: "/" },
      { label: t("breadcrumb.water"), link: "/water-production" },
    ],
  };

  return (
    <div className="water-production-page">
      {/* Banner Section */}
      <Banner
        imageSrc={bannerData.imageSrc}
        title={bannerData.title}
        breadcrumb={bannerData.breadcrumb}
      />
      <WaterProducts />
      {/* Water Production Description */}
    </div>
  );
};

export default WaterProductionPage;
