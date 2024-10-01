"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Fragment, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { name: "Mongolian", flag: "🇲🇳", locale: "mn" },
    { name: "English", flag: "🇺🇸", locale: "en" },
  ];

  const getDefaultLanguage = () => {
    const currentLocale = pathname.split("/")[1];
    return (
      languages.find((lang) => lang.locale === currentLocale) || languages[0]
    );
  };

  const [currentLanguage, setCurrentLanguage] = useState(getDefaultLanguage);

  useEffect(() => {
    setCurrentLanguage(getDefaultLanguage());
  }, [pathname]);

  const handleLanguageChange = (locale: string) => {
    const newPath = `/${locale}${pathname.substring(3)}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative">
        <div>
          <MenuButton className="flex items-center p-1 rounded-md border-[1px] border-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-gray-300">
            <span className="text-xl">{currentLanguage.flag}</span>

            <IconChevronDown className="ml-1 w-4 h-4 text-gray-500" />
          </MenuButton>
        </div>

        <MenuItems className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {languages.map((language, index) => (
            <MenuItem key={index} as={Fragment}>
              {({ focus }) => (
                <button
                  className={`${
                    focus ? "bg-gray-100" : ""
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700`}
                  onClick={() => handleLanguageChange(language.locale)}
                >
                  <span className="text-xl mr-2">{language.flag}</span>
                  {language.name}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
