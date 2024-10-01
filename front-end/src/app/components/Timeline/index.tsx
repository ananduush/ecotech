"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  const t = useTranslations("timeline");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto w-full h-full">
        <h2 className="text-3xl font-semibold mb-0 text-left">{t("title")}</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical timeline line */}
          <div className="absolute border-opacity-20 border-[#00cc00] border left-1/2 h-full transform -translate-x-1/2 hidden md:block"></div>

          {/* Timeline events */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row items-center w-full md:w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Content */}
              <div
                className="w-full md:w-5/12 px-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="mb-3 font-bold text-[#00cc00] text-xl">
                    {t(`events.${item.year}.title`)}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {t(`events.${item.year}.description`)}
                  </p>
                </div>
              </div>

              {/* Timeline Year */}
              <div className="z-20 flex items-center justify-center bg-[#00cc00] shadow-xl w-12 h-12 rounded-full mx-auto md:mx-0">
                <span className="text-white font-semibold">{item.year}</span>
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const timelineData = [
  { year: 2011 },
  { year: 2012 },
  { year: 2015 },
  { year: 2017 },
  { year: 2020 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
];

export default Timeline;
