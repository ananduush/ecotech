"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper/modules";

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
      <div className="absolute inset-0 flex flex-col items-start justify-center z-10 container">
        <h1 className="text-white lg:text-4xl font-bold mb-4">
          Эколожикал Технологи ХХК
        </h1>

        <p className="text-white lg:text-lg max-w-2xl">
          Эколожикал Текноложи ХХК нь 2011 оноос эхлэн хэрэглэгчдийн эрэлт
          хэрэгцээнд тулгуурлан хүрээлэн буй орчны аюулгүй байдал, эрүүл ахуй,
          чанарын удирдлагын стандартад нийцсэн кемп, катерингийн үйлчилгээг
          хэрэглэгч, үйлчлүүлэгчдийн байгаа газар байршилд хүрч, төв суурин
          газраас алслагдсан газар зүйн байрлалыг үл харгалзан хэрэглэгчдийн тав
          тухтай байдлыг эрхэмлэн, суурин болон гэр кэмпүүдийг байгуулан, эрэлт
          хэрэгцээг хангасан үйлчилгээг үзүүлэхийг зорин ажиллаж байна.
        </p>
      </div>
    </div>
  );
};

export default HomeSlider;
