"use client";

import React from "react";

const OperationCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  buttonLink,
}: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg mb-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="md:w-2/4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="md:w-2/4 md:pl-6 mt-4 md:mt-0">
        <h3 className="text-[40px] font-semibold mb-6">{title}</h3>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <a href={buttonLink}>
          <button className="border-[1px] border-[#00cc00] text-[#00cc00] px-6 py-3  hover:bg-[#009900] hover:text-white transition duration-300 ease-in-out">
            Дэлгэрэнгүй
          </button>
        </a>
      </div>
    </div>
  );
};

export default OperationCard;
