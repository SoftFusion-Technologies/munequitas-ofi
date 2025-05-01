import React from "react";
import "../../Styles/Productos.css";
import { cortos } from "../../Helpers/Arrays/cortos.js";
import "swiper/css";
import "swiper/css/navigation";
import Basepages from "../../Components/BasePage.jsx";

const Cortos = () => {
  return (
    <Basepages title="CORTOS" array={cortos}></Basepages>
  );
};

export default Cortos;
