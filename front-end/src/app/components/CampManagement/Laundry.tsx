import React from "react";

const Laundry = () => {
  const standarts = [
    {
      text: "Уурхайн ажилчдын бохирдол ихтэй хувцас, хэрэглэлийг мэргэжлийн түвшинд, зориулалтын тоног төхөөрөмжөөр угааж, хатааж үйлчилж байна",
    },
    {
      text: "2023-2024 онуудад олон улсын цэвэрлэгээ угаалгын ISSA стандартыг нэвтрүүлж хэрэгжүүлэхээр зорьж ажиллаж байна",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10 mb-[4rem]">
        <div>
          <img
            src="/images/laundry/laundry3.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>

        <div>
          <p className="text-[16px] md:text-[20px] font-bold">
            Зориулалтын хувцас угаагч машинаар уурхайчдын ажлын хувцасыг угааж
            үйлчилж байна.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h2>Галерия</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[1rem] md:mb-[5rem]">
          <div className="grid gap-4">
            <img
              src="/images/laundry/laundry1.jpg"
              alt=""
              className="h-auto max-w-full rounded-lg"
            />
            <img
              src="/images/laundry/laundry2.jpg"
              alt=""
              className="h-auto max-w-full rounded-lg"
            />
          </div>
          <div className="grid gap-4">
            <img
              src="/images/laundry/laundry4.jpg"
              alt=""
              className="h-auto max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10 mb-[4rem]">
        <h2>Баримталдаг стандартууд</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {standarts.map((standart, idx) => (
            <div
              className="flex items-start max-w-[700px] gap-10"
              key={`laundry-standart-${idx}`}
            >
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

export default Laundry;
