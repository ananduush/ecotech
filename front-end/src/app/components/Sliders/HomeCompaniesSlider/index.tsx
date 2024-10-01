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

const HomeServicesSlider = () => {
  const slides = [
    { logo: "/images/logo.png", name: "" },
    { logo: "/images/logo.png", name: "" },
    { logo: "/images/logo.png", name: "" },
    { logo: "/images/logo.png", name: "" },
    { logo: "/images/logo.png", name: "" },
    { logo: "/images/logo.png", name: "" },
  ];

  return (
    <div className="bg-gray-100">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        {slides.map((slide: any, idx) => (
          <SwiperSlide key={`company-slide-${idx}`}>
            <div className="flex flex-col items-center gap-5 bg-slate-100">
              <img src={slide.logo} alt="" height={60} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeServicesSlider;
