"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const menuItems = [
    { name: "Нүүр хуудас", link: "/" },
    { name: "Бидний тухай", link: "/" },
    { name: "Кемп менежментийн үйлчилгээ", link: "/" },
    { name: "Цэвэр ус үйлдвэрлэл", link: "/" },
    { name: "Хамтын ажиллагаа", link: "/" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-[100px] shadow-md flex items-center fixed bg-white w-full z-10">
      <div className="container flex justify-between items-center">
        {/* Logo */}

        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="Ecotech logo"
            className="max-h-[50px] w-max"
          />
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex gap-5">
          {menuItems.map((item, idx) => (
            <Link href={"/"} key={idx}>
              <div key={item.name} className="group relative w-max">
                <p className="underline-on-hover">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg w-[100%] max-w-[400px] transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            {/* Logo */}
            <div className="flex justify-between items-center">
              <img
                src="/images/logo.png"
                alt="Ecotech logo"
                className="max-h-[50px] w-max"
              />
              {/* Close Button */}
              <button
                className="text-gray-800"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="mt-8">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-4">
                  <p className="text-xl font-semibold cursor-pointer hover:text-main transition-colors">
                    {item.name}
                  </p>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
