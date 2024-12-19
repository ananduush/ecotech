import React from "react";
import { Link } from "@/i18n/routing";
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
      link: "",
      icon: <IconBrandFacebookFilled />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <IconBrandTwitterFilled />,
    },
    {
      name: "LinkedIn",
      link: "",
      icon: <IconBrandLinkedin />,
    },
  ];

  const columns = [
    {
      title: "Бидний тухай",
      link: "/about-us",
      children: [
        { name: "Эрхэм зорилго", link: "/about-us" },
        { name: "Алсын хараа", link: "/about-us" },
        { name: "Үнэт зүйлс", link: "/about-us" },
        { name: "Түүхэн замнал", link: "/about-us" },
        { name: "Үйл ажиллагааны чиглэл", link: "/about-us" },
      ],
    },
    {
      title: "Кемп менежментийн үйлчилгээ",
      link: "/camp-management",
      children: [
        { name: "Кемп менежмент", link: "/camp-management" },
        { name: "Хоол үйлдвэрлэл", link: "/camp-management" },
        { name: "Хувцас угаалга", link: "/camp-management" },
        { name: "Засвар үйлчилгээ", link: "/camp-management" },
      ],
    },
    {
      title: "Цэвэр ус үйлдвэрлэл",
      link: "/water-production",
      children: [{ name: "Брэнд бүтээгдэхүүн", link: "/water-production" }],
    },
    {
      title: "Хамтын ажиллагаа",
      link: "/partnerships",
      children: [],
    },
  ];

  return (
    <div className="border-t-[1px] border-t-gray-300">
      <div className="container pt-10">
        {/* First section: Logo and description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_800px] gap-10 items-start justify-between">
          <div className="flex flex-col gap-5">
            <Link href={"/"}>
              <div>
                <img
                  src="/images/logo.png"
                  alt="Ecotech logo"
                  className="max-h-[70px]"
                />
              </div>
            </Link>

            {/* Social Icons */}
            {/* <div className="flex gap-2">
              {socials.map((e: any) => (
                <Link href={e.link}>
                  <ActionIcon key={e.name}>{e.icon}</ActionIcon>
                </Link>
              ))}
            </div> */}

            {/* Google Maps Embed */}
            <div className="mt-5 w-full h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.49359301855543!2d106.92104735253773!3d47.91927885497541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969246b5edc9cd%3A0xe381075cd6ee26b0!2sCity%20tower%20business%20center!5e0!3m2!1sen!2smn!4v1727812403166!5m2!1sen!2smn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Second section: Menu columns */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {columns.map((column: any, index: number) => (
              <div key={`column-title-${column.title}`}>
                {/* Title of the section */}
                <Link href={column.link} className="mb-2 block">
                  <h4 className="underline-on-hover text-lg">{column.title}</h4>
                </Link>

                {/* Child links (only visible on larger screens) */}
              </div>
            ))}

            {columns.map((column: any) => (
              <div
                key={`columns-children-${column.title}`}
                className="hidden lg:flex flex-col gap-2"
              >
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
