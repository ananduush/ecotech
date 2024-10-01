import React from "react";
import HomeSlider from "../components/Sliders/HomeSlider";
import HomeServicesSlider from "../components/ServicesTabs";
import HomeCompaniesSlider from "../components/Sliders/HomeCompaniesSlider";
import HomeQuote from "../components/Quote/HomeQuote";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[50px] mb-10">
      <HomeSlider />

      <div className="container flex flex-col gap-10">
        <h2>Бидний үйлчилгээ</h2>

        <HomeServicesSlider />
      </div>

      <div className="container flex flex-col gap-10 my-10">
        <HomeQuote />
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="container">Хамтрагч байгууллагууд</h2>

        <HomeCompaniesSlider />
      </div>
    </div>
  );
};

export default HomePage;
