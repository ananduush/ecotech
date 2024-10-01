import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import "aos/dist/aos.css";

const geistSans = localFont({
  src: "../../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eco Tech",
  description: "“ЭКОЛОЖИКАЛ ТЕКНОЛОЖИ” ХХК-н албан ёсны веб хуудас",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="h-[100px]">
            <Header />
          </div>
          {children}
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
