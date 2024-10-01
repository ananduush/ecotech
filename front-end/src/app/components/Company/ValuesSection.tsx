"use client";

import React from "react";
import { IconDiamond } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const ValuesSection = () => {
  const t = useTranslations("company.values");

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex items-center mb-6">
          <IconDiamond size={48} className="mr-2" />
          <h3 className="text-2xl font-semibold  text-left">{t("title")}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Value 1 */}
          <div className="flex items-start" data-aos="fade-right">
            <div>
              <h4 className="text-xl font-semibold text-[#00cc00] mb-2">
                1. {t("leadership")}
              </h4>
              <p className="text-lg text-gray-700">
                {t("leadershipDescription")}
              </p>
            </div>
          </div>
          {/* Value 2 */}
          <div className="flex items-start" data-aos="fade-left">
            <div>
              <h4 className="text-xl font-semibold text-[#00cc00] mb-2">
                2. {t("quality")}
              </h4>
              <p className="text-lg text-gray-700">{t("qualityDescription")}</p>
            </div>
          </div>
          {/* Value 3 */}
          <div className="flex items-start" data-aos="fade-right">
            <div>
              <h4 className="text-xl font-semibold text-[#00cc00] mb-2">
                3. {t("safety")}
              </h4>
              <p className="text-lg text-gray-700">{t("safetyDescription")}</p>
            </div>
          </div>
          {/* Value 4 */}
          <div className="flex items-start" data-aos="fade-left">
            <div>
              <h4 className="text-xl font-semibold text-[#00cc00] mb-2">
                4. {t("sustainability")}
              </h4>
              <p className="text-lg text-gray-700">
                {t("sustainabilityDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
