import { useTranslations } from "next-intl";
import Banner from "@/app/components/Banner/HeroBanner";
import HomeCompaniesSlider from "@/app/components/Sliders/HomeCompaniesSlider";
const PartnershipsPage = () => {
  const t = useTranslations("partnerships");

  const slides = [
    { logo: "/images/logos/commod.png", name: "Commod" },
    { logo: "/images/logos/erch_mining.png", name: "Erch Mining" },
    { logo: "/images/logos/erkhet_tunsh.png", name: "Erkhet Tunsh" },
    { logo: "/images/logos/hera.png", name: "Hera" },
    { logo: "/images/logos/hlkmn.jpg", name: "HLKMN" },
    { logo: "/images/logos/javkhlant_ord.png", name: "Javkhlant Ord" },
    { logo: "/images/logos/mera.png", name: "Mera" },
    { logo: "/images/logos/olborlolt.png", name: "Olborlolt" },
    { logo: "/images/logos/oroot.png", name: "Oroot" },
    {
      logo: "/images/logos/tavantolgoi_tumurzam.jpg",
      name: "Tavantolgoi Tumurzam",
    },
    { logo: "/images/logos/ulz.jpg", name: "Ulz" },
    { logo: "/images/logos/weasley.jpg", name: "Weasley" },
  ];

  const bannerData = {
    imageSrc: "/images/housing/tennis.jpg",
    title: t("title"),
    breadcrumb: [
      { label: t("breadcrumb.home"), link: "/" },
      { label: t("breadcrumb.partnerships"), link: "/partnerships" },
    ],
  };

  return (
    <div className="partnerships-page">
      {/* Banner Section */}
      <Banner
        imageSrc={bannerData.imageSrc}
        title={bannerData.title}
        breadcrumb={bannerData.breadcrumb}
      />

      {/* Partnerships Logos Slider Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-semibold mb-8 text-left">
            {t("title")}
          </h2>
          <p className="text-lg leading-8 text-gray-700 mb-8">
            {t("description")}
          </p>
        </div>
        <HomeCompaniesSlider />
      </section>
    </div>
  );
};

export default PartnershipsPage;
