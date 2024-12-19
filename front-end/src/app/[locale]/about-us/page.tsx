import { Link } from "@/i18n/routing";
import { IconTargetArrow, IconEyeStar } from "@tabler/icons-react";
import Timeline from "@/app/components/Timeline";
import "aos/dist/aos.css";
import ValuesSection from "@/app/components/Company/ValuesSection";
import HomeServicesSlider from "@/app/components/ServicesTabs";
import Banner from "@/app/components/Banner/HeroBanner";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const banner = useTranslations("banner");
  const company = useTranslations("company");

  const bannerData = {
    imageSrc: "/images/housing/resort.jpg",
    title: banner("title"),
    breadcrumb: [
      { label: banner("breadcrumb.home"), link: "/" },
      { label: banner("breadcrumb.about"), link: "/about-us" },
    ],
  };

  return (
    <div className="about-us-page">
      {/* Banner Section */}
      <Banner
        imageSrc={bannerData.imageSrc}
        title={bannerData.title}
        breadcrumb={bannerData.breadcrumb}
      />

      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
            <p className="text-lg leading-8 text-gray-700 mb-8">
              {company.rich("introduction", {
                ecotech: (chunks) => (
                  <span className="font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>

          {/* Image */}
          <div
            className="md:w-1/2"
            data-oas="fade-up"
            data-aos-anchor-placement="top"
          >
            <img
              src="/images/company/introduction.jpg"
              alt="Company Introduction"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center mb-4">
              <IconTargetArrow size={48} color="#00cc00" className="mr-2" />
              <h3 className="text-2xl font-semibold text-[#00cc00]">
                {company("mission.title")}
              </h3>
            </div>
            <p className="text-lg leading-8 text-gray-700">
              {company("mission.description")}
            </p>
          </div>

          {/* Vision */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center mb-4">
              <IconEyeStar size={48} color="#00cc00" className="mr-2" />
              <h3 className="text-2xl font-semibold text-[#00cc00]">
                {company("vision.title")}
              </h3>
            </div>
            <p className="text-lg leading-8 text-gray-700">
              {company("vision.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <Timeline />
        </div>
      </section>

      {/* Operational Directions Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-8 text-left">
          {company("operations.title")}
        </h2>
        <HomeServicesSlider />
      </section>
    </div>
  );
};

export default AboutUsPage;
