"use client";
import React, { useState } from "react";

import Catering from "@/app/components/CampManagement/Catering";
import Housing from "@/app/components/CampManagement/Housing";
import Laundry from "@/app/components/CampManagement/Laundry";
import Services from "@/app/components/CampManagement/Services";

import { BsHousesFill } from "react-icons/bs";
import { FaWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { MdMiscellaneousServices, MdOutlineFoodBank } from "react-icons/md";

const CampManagement = () => {
  const [active, setActive] = useState("housing");

  const slides = [
    {
      icon: (
        <BsHousesFill
          size={50}
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
          size={50}
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
          size={50}
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
    {
      icon: (
        <MdMiscellaneousServices
          size={50}
          className={`${
            active === "services"
              ? "text-white"
              : "text-gray-400 group-hover:text-white"
          }`}
        />
      ),
      slug: "services",
      title: "засвар үйлчилгээ",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="h-[400px] bg-gray-500 w-full text-white text-[50px] font-bold text-center items-center flex justify-center">
        BANNER
      </div>

      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          {slides.map((slide, index) => (
            <button
              onClick={() => setActive(slide.slug)}
              key={index}
              className={`flex w-full py-5 flex-col items-center gap-5 
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
                } text-[16px] leading-5 group-hover:text-white`}
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
