"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const HomeServicesSlider = () => {
  const slides = [
    { logo: "/images/logos/commod.png", name: "Commod" },
    { logo: "/images/logos/erch_mining.png", name: "Erch Mining" },
    { logo: "/images/logos/erkhet_tunsh.png", name: "Erkhet Tunsh" },
    { logo: "/images/logos/hera.png", name: "Hera" },
    { logo: "/images/logos/hlkmn.jpg", name: "HLKMN" },
    { logo: "/images/logos/javkhlant_ord.png", name: "Javkhlant Ord" },
    { logo: "/images/logos/mera.png", name: "Mera" },
    { logo: "/images/logos/olborlolt.png", name: "Olborlolt" },
    { logo: "/images/logos/oroot.png", name: "Oroot" },
    {
      logo: "/images/logos/tavantolgoi_tumurzam.jpg",
      name: "Tavantolgoi Tumurzam",
    },
    { logo: "/images/logos/ulz.jpg", name: "Ulz" },
    { logo: "/images/logos/weasley.jpg", name: "Weasley" },
  ];

  return (
    <div className="my-10">
      <Swiper
        slidesPerView={5} // Default for large screens
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper container custom-swiper-pagination"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`company-slide-${idx}`}>
            <div className="flex items-center h-[100px]">
              <div>
                <img
                  src={slide.logo}
                  alt={slide.name}
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
