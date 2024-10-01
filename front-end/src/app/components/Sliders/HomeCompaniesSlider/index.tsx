"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Pagination } from "swiper/modules";
import { MdOutlineFoodBank } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";

const HomeServicesSlider = () => {
  const slides = [
    { logo: "/images/logos/commod.png", name: "" },
    { logo: "/images/logos/erch_mining.png", name: "" },
    { logo: "/images/logos/erkhet_tunsh.png", name: "" },
    { logo: "/images/logos/hera.png", name: "" },
    { logo: "/images/logos/hlkmn.jpg", name: "" },
    { logo: "/images/logos/javkhlant_ord.png", name: "" },
    { logo: "/images/logos/mera.png", name: "" },
    { logo: "/images/logos/olborlolt.png", name: "" },
    { logo: "/images/logos/oroot.png", name: "" },
    { logo: "/images/logos/tavantolgoi_tumurzam.jpg", name: "" },
    { logo: "/images/logos/ulz.jpg", name: "" },
    { logo: "/images/logos/weasley.jpg", name: "" },
  ];

  return (
    <div className="">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper container custom-swiper-pagination h-[400px]"
      >
        {slides.map((slide: any, idx) => (
          <SwiperSlide key={`company-slide-${idx}`}>
            <div className="flex items-center h-[100px]">
              <div>
                <img
                  src={slide.logo}
                  alt=""
                  className="max-w-[130px] object-contain select-none"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeServicesSlider;
