

// Component Imports
import Slider from "../../components/home/Slider.jsx";
import WhatAppIcon from "../../components/whatAppIcon/WhatsAppIcon";
import CategoriesSection from "../../components/home/categoriesSection/CategoriesSection.jsx";
import CategoriesMostSection from "../../components/home/categoriesMostSection/CategoriesMostSection.jsx";
import WhyUsSection from "../../components/home/whyUsSection/WhyUsSection.jsx";
import ServicesSection from "../../components/home/servicesSection/ServicesSection.jsx";
import QuestionsSection from "../../components/home/questionsSection/QuestionsSection.jsx";

const Home = () => {
  return (
    <>
      <Slider />
      <CategoriesSection />
      <CategoriesMostSection />
      <WhatAppIcon />
      <WhyUsSection />
      <ServicesSection />
      <QuestionsSection />
    </>
  );
};

export default Home;
