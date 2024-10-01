"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("MenuItems");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: t("home"), link: "/" },
    { name: t("aboutUs"), link: "/" },
    { name: t("campManagement"), link: "/camp-management" },
    { name: t("waterProduction"), link: "/" },
    { name: t("partnerships"), link: "/" },
  ];

  return (
    <div className="h-[100px] shadow-md flex items-center fixed bg-white w-full z-[90]">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <img
            src="/images/logo.png"
            alt="Ecotech logo"
            className="max-h-[90px] w-max"
          />
        </Link>
        {/* Desktop Menu Items */}
        <div className="hidden lg:flex lg:items-center gap-5">
          {menuItems.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <p key={item.name} className="group relative w-max">
                <p className="underline-on-hover">{item.name}</p>
              </p>
            </Link>
          ))}
          <LanguageSelector />
        </div>

        <div className="lg:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

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
