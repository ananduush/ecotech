import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css"; // Make sure styles.css includes appropriate styles

export default function CateringSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    { url: "/images/catering/food1.jpg" },
    { url: "/images/catering/food2.jpg" },
    { url: "/images/catering/food6.jpg" },
    { url: "/images/catering/food7.jpg" },
    { url: "/images/catering/food8.jpg" },
    { url: "/images/catering/vegetable1.jpg" },
    { url: "/images/catering/vegetable2.jpg" },
    { url: "/images/catering/vegetable3.jpg" },
  ];

  return (
    <div>
      {/* Main Swiper */}
      <Swiper
        style={{
          ["--swiper-navigation-color" as any]: "#fff",
          ["--swiper-pagination-color" as any]: "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }} // Link the thumbnails
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image.url} alt={`Catering image ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={(swiperInstance: any) => setThumbsSwiper(swiperInstance)} // Set the thumbnail swiper state properly
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        watchSlidesProgress={true} // Ensure the thumbnails reflect the active slide
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
        style={{ marginTop: "20px" }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image.url} alt={`Thumbnail ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
