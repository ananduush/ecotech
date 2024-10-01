import React from "react";
import Link from "next/link";
import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import ActionIcon from "../Buttons/ActionIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "Facebook",
      icon: <IconBrandFacebookFilled />,
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitterFilled />,
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin />,
    },
  ];

  const columns = [
    {
      title: "Бидний тухай",
      link: "/",
      children: [
        { name: "Эрхэм зорилго", link: "/" },
        { name: "Алсын хараа", link: "/" },
        { name: "Үнэт зүйлс", link: "/" },
        { name: "Түүхэн замнал", link: "/" },
        { name: "Үйл ажиллагааны чиглэл", link: "/" },
      ],
    },
    {
      title: "Кемп менежментийн үйлчилгээ",
      link: "/",
      children: [
        { name: "Кемп менежмент", link: "/" },
        { name: "Хоол үйлдвэрлэл", link: "/" },
        { name: "Хувцас угаалга", link: "/" },
        { name: "Засвар үйлчилгээ", link: "/" },
      ],
    },
    {
      title: "Цэвэр ус үйлдвэрлэл",
      link: "/",
      children: [{ name: "Брэнд бүтээгдэхүүн", link: "/" }],
    },
    {
      title: "Хамтын ажиллагаа",
      link: "/",
      children: [],
    },
  ];

  return (
    <div className="border-t-[1px] border-t-gray-200">
      <div className="container pt-10">
        {/* First section: Logo and description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_800px] gap-10 items-start justify-between">
          <div className="flex flex-col gap-5 max-w-[350px]">
            <Link href={"/"}>
              <img
                src="/images/logo.png"
                alt="Ecotech logo"
                className="max-h-[70px] w-max"
              />
            </Link>

            <p className="text-sm text-wrap">
              Эколожикал Текноложи ХХК нь 2011 оноос эхлэн хэрэглэгчдийн эрэлт
              хэрэгцээнд тулгуурлан хүрээлэн буй орчны аюулгүй байдал, эрүүл
              ахуй, чанарын удирдлагын стандартад нийцсэн кемп, катерингийн
              үйлчилгээг хэрэглэгч, үйлчлүүлэгчдийн байгаа газар байршилд хүрч,
              төв суурин газраас алслагдсан газар зүйн байрлалыг үл харгалзан
              хэрэглэгчдийн тав тухтай байдлыг эрхэмлэн, суурин болон гэр
              кэмпүүдийг байгуулан, эрэлт хэрэгцээг хангасан үйлчилгээг
              үзүүлэхийг зорин ажиллаж байна.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socials.map((e: any) => (
                <ActionIcon key={e.name}>{e.icon}</ActionIcon>
              ))}
            </div>
          </div>

          {/* Second section: Menu columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((column: any, index: number) => (
              <div key={`column-title-${column.title}`}>
                {/* Title of the section */}
                <Link href={column.link} className="mb-2 block">
                  <h4 className="underline-on-hover text-sm">{column.title}</h4>
                </Link>

                {/* Child links (only visible on larger screens) */}
              </div>
            ))}

            {columns.map((column: any) => (
              <div className="hidden lg:flex flex-col gap-2">
                {column.children.map((child: any, idx: number) => (
                  <Link key={`column-children-${child.name}`} href={child.link}>
                    <p className="underline-on-hover text-sm">{child.name}</p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="mt-10 border-t-[1px] py-5">
        <p className="text-xs container text-center">
          Бүх эрх хуулиар хамгаалагдсан ©{year} Эколожикал Текноложи ХХК
        </p>
      </div>
    </div>
  );
};

export default Footer;
