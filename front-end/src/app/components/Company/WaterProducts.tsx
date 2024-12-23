"use client";

import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
const WaterProducts = () => {
  const t = useTranslations("waterProduction");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {" "}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto text-left flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
            <h2 className="text-2xl font-semibold mb-6 text-[#00cc00]">
              {t("productionTitle")}
            </h2>
            <p className="text-lg leading-8 text-gray-700 mb-8">
              {t("productionDescription")}
            </p>
          </div>

          {/* Image */}
          <div
            className="md:w-1/2"
            data-oas="fade-up"
            data-aos-anchor-placement="top"
          >
            <img
              src="/images/services/clean-water.jpg" // Replace with your image
              alt="Water Production Factory"
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </section>
      {/* Water Types Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* MINER Water */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-[#00cc00] mb-4">
              {t("miner.title")}
            </h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              {t("miner.description")}
            </p>
            <img
              src="/images/company/miner.png"
              alt="MINER Water"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* AMTAT Water */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-[#00cc00] mb-4">
              {t("amtat.title")}
            </h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              {t("amtat.description")}
            </p>
            <img
              src="/images/company/undra.png"
              alt="AMTAT Water"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterProducts;
