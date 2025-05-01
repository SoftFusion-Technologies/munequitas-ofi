import React from "react";
import "../../Styles/Productos.css";
import { xxl } from "../../Helpers/Arrays/xxl.js";
import "swiper/css";
import "swiper/css/navigation";
import Basepages from "../../Components/BasePage.jsx";

const XXL = () => {
  return <Basepages title="XXL" array={xxl}></Basepages>;
};

export default XXL;
