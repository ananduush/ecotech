import Image from "next/image";
import React from "react";

const Header = () => {
  const menuItems = [
    { name: "Нүүр хуудас" },
    { name: "Бидний тухай" },
    { name: "Кемп менежментийн үйлчилгээ" },
    { name: "Цэвэр ус үйлдвэрлэл" },
    { name: "Хамтын ажиллагаа" },
  ];

  return (
    <div className="h-[100px] shadow-md flex items-center fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Ecotech logo"
          className="max-h-[50px] w-max"
        />

        {/* Menu Items */}
        <div className="flex gap-5">
          {menuItems.map((item) => (
            <div key={item.name} className="group relative w-max">
              <p className="cursor-pointer group-hover:text-blue-500 transition-colors">
                {item.name}
              </p>

              {/* Underline with transition */}
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
