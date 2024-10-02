"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { Link } from "@/i18n/routing";

const HomeSlider = () => {
  const slides = [
    { name: "", image: "/images/company/image1.jpg" },
    { name: "", image: "/images/company/image2.jpg" },
    { name: "", image: "/images/company/image3.jpg" },
    { name: "", image: "/images/company/image4.jpg" },
    { name: "", image: "/images/company/image5.jpg" },
    { name: "", image: "/images/company/image6.jpg" },
  ];

  return (
    <div className="relative">
      <Swiper
        className="mySwiper max-h-[80vh]"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`home-slider-${idx}`}>
            <div className="relative">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover min-h-[600px]"
              />
              {/* Dimmed overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-start justify-center z-10 container gap-10">
        <div className="flex flex-col gap-3">
          <img
            src="/images/logo.png"
            alt=""
            className="max-w-[200px] brightness-[200]"
          />

          <h1 className="text-white lg:text-4xl font-bold">
            “ЭКОЛОЖИКАЛ ТЕКНОЛОЖИ” ХХК -{" "}
            <span className="font-normal italic">
              Тогтвортой хөгжсөн 11 жил
            </span>
          </h1>
        </div>

        <Link href={"/contact-us"}>
          <button
            type="button"
            className="text-white hover:bg-white uppercase hover:text-black border-[1px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            Бидэнтэй холбогдох
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlider;
