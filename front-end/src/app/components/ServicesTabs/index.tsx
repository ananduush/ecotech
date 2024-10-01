"use client";
import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";

const HomeServicesSlider = () => {
  const slides = [
    {
      icon: (
        <MdOutlineFoodBank
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      slug: "catering",
      title: "катеринг",
    },
    {
      icon: (
        <BsHousesFill
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      slug: "",
      title: "амрах байр",
    },
    {
      icon: (
        <GiWashingMachine
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      slug: "",
      title: "хувсац угаалга",
    },
    {
      icon: (
        <FaWater size={50} className="group-hover:text-white text-gray-400" />
      ),
      slug: "",
      title: "цэвэрлэх байгууламж",
    },
    {
      icon: (
        <FaBottleWater
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      slug: "",
      title: "цэвэр ус",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className="flex w-full py-5 flex-col items-center gap-5 hover:text-white group hover:bg-main duration-300 ease-in-out"
          >
            <div>{slide.icon}</div>
            <h3 className="uppercase group-hover:text-white text-main text-[16px] leading-5">
              {slide.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeServicesSlider;
