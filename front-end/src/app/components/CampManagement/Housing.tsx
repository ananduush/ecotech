import React from "react";

const Housing = () => {
  const contents = [
    {
      title: "Сэтгэл ханамж",
      description:
        "Сэтгэл ханамжийг нэмэгдүүлэх хүрээнд амрах байрны дотоод орчинд тасралтгүй сайжруулалтыг төлөвлөж, үйлчлүүлэгчдийн тав тухыг хангаж байна.",
      images: [{ url: "/images/housing/resort.jpg" }],
    },
    {
      title: "Таатай орчин",
      description:
        "Кемпийн өнгө үзэмжийг нэмэгдүүлж амьдрах таатай орчинг бүрдүүлэн зүлэгжүүлэлт, цэцэрлэгжүүлэлтийг хийж байна",
      images: [{ url: "/images/housing/chess.jpg" }],
    },
    {
      title: "Тав тух",
      description:
        "Стандартын шаардлага хангасан сагсан бөмбөг, гар бөмбөгийн талбайг ашиглалтанд оруулав",
      images: [
        { url: "/images/housing/plant.jpg" },
        { url: "/images/company/image4.jpg" },
        { url: "/images/housing/room.jpg" },
      ],
    },
  ];

  const standarts = [
    {
      text: "2018 онд кемп катерингийн үйл ажиллагаанд ISO 9001:2015 Чанарын менежментийн тогтолцоо стандартыг нэвтрүүлж олон улсын статустай болов",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {contents.map((content: any, idx) => (
        <div
          key={`housing-${idx}`}
          className="grid grid-cols-2 shadow-lg rounded-lg items-center p-5 gap-2"
        >
          {idx % 2 === 0 && (
            <div className="">
              <h2 className="mb-3">{content.title}</h2>
              <p>{content.description}</p>
            </div>
          )}

          <div
            className={`grid ${
              content.images.length >= 3 ? "grid-cols-2" : "grid-cols-1"
            } gap-1`}
          >
            {content.images.map((img: any) => (
              <img src={img.url} alt="" className="rounded-md" />
            ))}
          </div>

          {idx % 2 !== 0 && (
            <div className="text-right">
              <h2 className="mb-3">{content.title}</h2>
              <p>{content.description}</p>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-10 mt-10 mb-[4rem]">
        <h2>Баримталдаг стандартууд</h2>

        <div className="flex justify-center">
          {standarts.map((standart: any, idx) => (
            <div className="flex items-center max-w-[700px] gap-10">
              <div className="flex flex-col items-center gap-5 text-center">
                <img src="/icons/iso.svg" alt="" className="max-w-[150px]" />
                <p>{standart.text}</p>
              </div>

              <img src="/images/iso.png" alt="" className="w-[300px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Housing;
