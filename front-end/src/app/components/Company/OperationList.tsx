"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OperationCard from "../Card/OperationCard";

const OperationList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const operations = [
    {
      title: "Амрах байр",
      description:
        "Тав тухтай, аюулгүй орчинг бүрдүүлсэн амрах байрны үйлчилгээг бид санал болгодог. 2018 онд кемп катерингийн үйл ажиллагаанд ISO 9001:2015 Чанарын менежментийн тогтолцоо стандартыг нэвтрүүлж олон улсын статустай болов",
      imageSrc: "/images/services/accommodation.jpg", // Replace with your image
      imageAlt: "Амрах байр",
      reverse: false,
      buttonLink: "/services/accommodation",
    },
    {
      title: "Катеринг",
      description:
        "Эрүүл ахуйн стандарт хангасан, амт чанартай хоол хүнсийг үйлчлүүлэгчдэд хүргэнэ.",
      imageSrc: "/images/services/catering.jpg", // Replace with your image
      imageAlt: "Катеринг",
      reverse: true,
      buttonLink: "/services/catering",
    },
    {
      title: "Хувцас угаалга",
      description:
        "Орчин үеийн тоног төхөөрөмжөөр тоноглогдсон угаалгын үйлчилгээ үзүүлдэг.",
      imageSrc: "/images/services/laundry.jpg", // Replace with your image
      imageAlt: "Хувцас угаалга",
      reverse: false,
      buttonLink: "/services/laundry",
    },
    {
      title: "Цэвэр ус",
      description:
        "Чанарын шаардлага хангасан цэвэр усаар хангах үйлчилгээг үзүүлдэг.",
      imageSrc: "/images/services/clean-water.jpg", // Replace with your image
      imageAlt: "Цэвэр ус",
      reverse: true,
      buttonLink: "/services/clean-water",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2
          className="text-3xl font-semibold text-[#00cc00] mb-6 text-center"
          data-aos="fade-up"
        >
          Үйл ажиллагааны чиглэл
        </h2>
        {operations.map((operation, index) => (
          <OperationCard
            key={index}
            title={operation.title}
            description={operation.description}
            imageSrc={operation.imageSrc}
            imageAlt={operation.imageAlt}
            reverse={operation.reverse}
            buttonLink={operation.buttonLink}
          />
        ))}
      </div>
    </section>
  );
};

export default OperationList;
