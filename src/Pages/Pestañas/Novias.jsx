import React from "react";
import "../../Styles/Productos.css";
import { novias } from "../../Helpers/Arrays/novias.js";
import "swiper/css";
import "swiper/css/navigation";
import Basepages from "../../Components/BasePage.jsx";


const Novias = () => {
  return (
    <Basepages title="NOVIAS" array={novias}></Basepages>
  );
};

export default Novias;
