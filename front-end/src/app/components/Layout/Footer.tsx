import React from "react";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import ActionIcon from "../Buttons/ActionIcon";

const Footer = () => {
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
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-[max-content_800px] gap-8 items-start justify-between">
        <div className="flex flex-col gap-5">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt="Ecotech logo"
              className="max-h-[40px] w-max"
            />
          </Link>

          <div className="flex gap-2">
            {socials.map((e: any) => (
              <ActionIcon>{e.icon}</ActionIcon>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {columns.map((e: any) => (
            <div>
              <Link href={e.link} className="mb-[50px]">
                <h4>{e.title}</h4>
              </Link>

              <div className="flex flex-col gap-5">
                {e.children.map((e: any) => (
                  <Link href={e.link}>
                    <p>{e.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
