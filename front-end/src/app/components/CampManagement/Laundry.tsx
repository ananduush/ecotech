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

export default Laundry;
