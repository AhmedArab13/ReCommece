import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import FiltredProducts from "../FiltredProducts/FiltredProducts";
import Footer from "../Footer/Footer";
import ProductSection from "../ProductSection/ProductSection";
export default function () {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      {/* <FiltredProducts /> */}
      <ProductSection/>
      <Footer/>
    </>
  );
}
