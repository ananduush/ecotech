import React from "react";

const HomeQuote = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
      {/* Logo section */}
      <img
        src="/images/logo.png"
        className="max-w-[200px] md:max-w-[300px]"
        alt="Logo"
      />

      {/* Quote section */}
      <figure className="max-w-full md:max-w-screen-md text-left">
        <svg
          className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-lg md:text-2xl italic font-medium text-gray-900">
            "Харилцагч нарынхаа нийгмийн хариуцлага, тогтвортой хөгжлийн
            зорилтуудыг хэрэгжүүлэхэд дэмжлэг үзүүлэх замаар нийгэм, эдийн
            засаг, хүрээлэн буй орчны тогтвортой хөгжилд үнэ цэнэтэй хувь нэмрээ
            оруулахын төлөө тасралтгүй зорин ажиллаж байна. Хамтрагч
            байгууллагууд болон ажилчиддаа чин сэтгэлийн талархал илэрхийлье."
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-start mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
            <cite className="ps-3 text-sm text-gray-500">
              - <span className="text-main">ГҮЙЦЭТГЭХ ЗАХИРЛЫН</span> МЭНДЧИЛГЭЭ
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default HomeQuote;
