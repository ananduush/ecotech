import React from "react";
import CateringSlider from "../Sliders/CateringSlider";

const Catering = () => {
  const standarts = [
    {
      text: "Катерингийн үйлчилгээнд MNS 4946:2019 – Хоол үйлдвэрлэл үйлчилгээний газарт тавих шаардлага стандартыг бүрэн хангаж байна",
    },
    {
      text: "Үйлдвэрлэлийн болон эрүүл ахуйн зохистой дадлыг ажилчиддаа хоногшуулж хоол хүнсээр дамжин халдварлах өвчлөлийн эрсдэлийг хязгаарлаж байна",
    },
    {
      text: "Чанарын менежментийн тогтолцооны хүрээнд өдөр тутмын бүх үйл ажиллагаа, хоол үйлдвэрлэлийн гинжин хэлхээнд хүнсний аюулгүй байдлыг сахиж байна",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="relative flex flex-col items-center gap-5">
        <img
          src="/images/catering/bakery.jpg"
          alt=""
          className="max-h-[500px] w-full object-cover"
        />
        <p className="absolute inset-0 flex flex-col items-start justify-center z-10 container text-center max-w-[700px] text-white font-bold italic text-[24px]">
          Уурхайчдын ажлын ачаалал, өдөрт авах илчлэг, шим тэжээлийн хэрэгцээг
          нарийн тооцоолж олон төрлийн сонголттой, улирлын онцлогт тохирсон
          цэсээр мэргэжлийн тогооч хамт олон үйлчилж байна
        </p>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Gallery Style Image Grid */}
      <div className="flex flex-col gap-10 mt-[4rem]">
        <h2>Галерия</h2>

        <CateringSlider />
      </div>

      {/* Standards Section */}
      <div className="flex flex-col gap-10 mt-10 mb-[4rem]">
        <h2>Баримталдаг стандартууд</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {standarts.map((standart, idx) => (
            <div className="flex items-start max-w-[700px] gap-10" key={idx}>
              <div className="flex flex-col items-center gap-5 text-center">
                <img src="/icons/iso.svg" alt="" className="max-w-[130px]" />
                <p>{standart.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catering;
