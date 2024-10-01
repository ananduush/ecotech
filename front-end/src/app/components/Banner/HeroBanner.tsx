import { Link } from "@/i18n/routing";
import { IconChevronRight } from "@tabler/icons-react";

const Banner = ({ imageSrc, title, breadcrumb }: any) => {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[400px] object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>

          <div className="text-sm text-white flex items-center">
            {breadcrumb.map((item: any, index: any) => (
              <div key={index + item.link} className="flex items-center">
                <Link
                  href={item.link}
                  className={`hover:underline  ${
                    index == 1 ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {index < breadcrumb.length - 1 && (
                  <IconChevronRight className="mx-2" size={14} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
