"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";
import { MdOutlineFoodBank } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";

const HomeServicesSlider = () => {
  const slides = [
    {
      icon: (
        <MdOutlineFoodBank
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      title: "катеринг",
    },
    {
      icon: (
        <BsHousesFill
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      title: "амрах байр",
    },
    {
      icon: (
        <GiWashingMachine
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      title: "хувсац угаалга",
    },
    {
      icon: (
        <FaWater size={50} className="group-hover:text-white text-gray-400" />
      ),
      title: "цэвэрлэх байгууламж",
    },
    {
      icon: (
        <FaBottleWater
          size={50}
          className="group-hover:text-white text-gray-400"
        />
      ),
      title: "цэвэр ус",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-5">
        {slides.map((slide) => (
          <button className="flex w-full py-5 flex-col items-center gap-5 hover:text-white group hover:bg-main duration-300 ease-in-out">
            <div>{slide.icon}</div>

            <h3 className="uppercase group-hover:text-white text-main text-[16px] leading-5">
              {slide.title}
            </h3>
          </button>
        ))}
      </div>

      {/* <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide: any, idx) => (
          <SwiperSlide key={`services-${idx}`}>
            <div className="flex flex-col items-center gap-5">
              <div>{slide.icon}</div>

              <h3 className="uppercase text-main text-[16px] leading-5">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default HomeServicesSlider;
