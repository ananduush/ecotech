import { useTranslations } from "next-intl";
import Banner from "@/app/components/Banner/HeroBanner";
import { IconPhoneCall, IconMapPin, IconMail } from "@tabler/icons-react";

const ContactUsPage = () => {
  const t = useTranslations("contact");

  const bannerData = {
    imageSrc: "/images/company/hero-image.jpg",
    title: t("title"),
    breadcrumb: [
      { label: t("breadcrumb.home"), link: "/" },
      { label: t("breadcrumb.contact"), link: "/contact" },
    ],
  };

  return (
    <div className="contact-us-page">
      <Banner
        imageSrc={bannerData.imageSrc}
        title={bannerData.title}
        breadcrumb={bannerData.breadcrumb}
      />
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto text-left">
          <h2 className="text-2xl font-semibold mb-6 text-[#00cc00]">
            {t("contactTitle")}
          </h2>
          <p className="text-lg leading-8 text-gray-700 mb-8">
            {t("contactDescription")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold text-[#00cc00] mb-4">
                {t("details.title")}
              </h3>

              {/* Address */}
              <div className="flex items-center mb-4">
                <IconMapPin size={24} className="text-[#00cc00] mr-2" />
                <p className="text-lg text-gray-700">{t("details.address")}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center mb-4">
                <IconPhoneCall size={24} className="text-[#00cc00] mr-2" />
                <p className="text-lg text-gray-700">
                  {t("details.phone")}: 7575-2929
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <IconMail size={24} className="text-[#00cc00] mr-2" />
                <p className="text-lg text-gray-700">
                  {t("details.email")}: admin@ecotech.mn
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-[#00cc00] mb-4">
                {t("form.title")}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("form.name")}
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    type="text"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("form.email")}
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    rows={4}
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#00cc00] text-white px-6 py-3 rounded-lg hover:bg-[#009900]"
                >
                  {t("form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
