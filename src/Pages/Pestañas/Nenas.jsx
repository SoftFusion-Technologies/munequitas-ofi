import React from "react";
import "../../Styles/Productos.css";
import { nenas } from "../../Helpers/Arrays/nenas.js";
import "swiper/css";
import "swiper/css/navigation";
import Basepages from "../../Components/BasePage.jsx";

const Nenas = () => {
  return <Basepages title="NENAS" array={nenas}></Basepages>;
};

export default Nenas;
