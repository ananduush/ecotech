"use client";
import React, { useState } from "react";

import Catering from "@/app/components/CampManagement/Catering";
import Housing from "@/app/components/CampManagement/Housing";
import Laundry from "@/app/components/CampManagement/Laundry";
import Services from "@/app/components/CampManagement/Services";

import { BsHousesFill } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { MdMiscellaneousServices, MdOutlineFoodBank } from "react-icons/md";
import Banner from "@/app/components/Banner/HeroBanner";
import { useTranslations } from "next-intl";

const CampManagement = () => {
  const [active, setActive] = useState("housing");
  const banner = useTranslations("banner");

  const bannerData = {
    imageSrc: "/images/company/image1.jpg",
    title: banner("campManagementTitle"),
    breadcrumb: [
      { label: banner("breadcrumb.home"), link: "/" },
      { label: banner("breadcrumb.campManagement"), link: "/camp-management" },
    ],
  };

  const slides = [
    {
      icon: (
        <BsHousesFill
          size={30} // smaller icons on mobile
          className={`${
            active === "housing"
              ? "text-white"
              : "text-gray-400 group-hover:text-white"
          }`}
        />
      ),
      slug: "housing",
      title: "кемп менежмент",
    },
    {
      icon: (
        <MdOutlineFoodBank
          size={30}
          className={`${
            active === "catering"
              ? "text-white"
              : "text-gray-400 group-hover:text-white"
          }`}
        />
      ),
      slug: "catering",
      title: "хоол үйлдвэрлэл",
    },
    {
      icon: (
        <GiWashingMachine
          size={30}
          className={`${
            active === "laundry"
              ? "text-white"
              : "text-gray-400 group-hover:text-white"
          }`}
        />
      ),
      slug: "laundry",
      title: "хувцас угаалга",
    },
    // {
    //   icon: (
    //     <MdMiscellaneousServices
    //       size={30}
    //       className={`${
    //         active === "services"
    //           ? "text-white"
    //           : "text-gray-400 group-hover:text-white"
    //       }`}
    //     />
    //   ),
    //   slug: "services",
    //   title: "засвар үйлчилгээ",
    // },
  ];

  return (
    <div className="flex flex-col gap-10">
      <Banner
        imageSrc={bannerData.imageSrc}
        title={bannerData.title}
        breadcrumb={bannerData.breadcrumb}
      />

      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {slides.map((slide, index) => (
            <button
              onClick={() => setActive(slide.slug)}
              key={index}
              className={`flex w-full py-2 sm:py-5 flex-row md:flex-col items-center gap-2 md:gap-5 
                ${
                  active === slide.slug
                    ? "bg-main text-white"
                    : "hover:bg-main group hover:text-white"
                } 
                duration-300 ease-in-out`}
            >
              <div>{slide.icon}</div>
              <h3
                className={`uppercase ${
                  active === slide.slug ? "text-white" : "text-main"
                } text-[14px] sm:text-[16px] leading-5 group-hover:text-white`}
              >
                {slide.title}
              </h3>
            </button>
          ))}
        </div>

        <div>
          {active === "housing" && <Housing />}
          {active === "catering" && <Catering />}
          {active === "laundry" && <Laundry />}
          {active === "services" && <Services />}
        </div>
      </div>
    </div>
  );
};

export default CampManagement;
