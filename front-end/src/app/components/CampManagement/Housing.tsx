import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Housing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
      {contents.map((content, idx) => (
        <div
          data-aos={`${idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}`}
          key={`housing-${idx}`}
          className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg items-center p-5 gap-2"
        >
          {/* For larger screens, align content and image */}
          {idx % 2 === 0 && (
            <div className="">
              <h2 className="mb-3 text-lg md:text-2xl">{content.title}</h2>
              <p className="text-sm md:text-base">{content.description}</p>
            </div>
          )}

          <div
            className={`grid ${
              content.images.length >= 3 ? "grid-cols-2" : "grid-cols-1"
            } gap-1`}
          >
            {content.images.map((img, idx) => (
              <img
                key={`standart-${idx}`}
                src={img.url}
                alt=""
                className="rounded-md w-full object-cover"
              />
            ))}
          </div>

          {idx % 2 !== 0 && (
            <div className="text-right">
              <h2 className="mb-3 text-lg md:text-2xl">{content.title}</h2>
              <p className="text-sm md:text-base">{content.description}</p>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-10 mt-10 mb-[4rem]">
        <h2 className="text-lg md:text-2xl">Баримталдаг стандартууд</h2>

        <div className="flex justify-center">
          {standarts.map((standart, idx) => (
            <div
              key={`standart-${idx}`}
              className="flex flex-col md:flex-row items-center max-w-[700px] gap-10"
            >
              <div
                data-aos={"fade-right"}
                className="flex flex-col items-center gap-5 text-center"
              >
                <img
                  src="/icons/iso.svg"
                  alt=""
                  className="max-w-[100px] md:max-w-[150px]"
                />
                <p className="text-sm md:text-base">{standart.text}</p>
              </div>

              <img
                data-aos={"fade-left"}
                src="/images/iso.png"
                alt=""
                className="w-[200px] md:w-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Housing;
