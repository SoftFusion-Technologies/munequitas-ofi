import React from "react";
import "../../Styles/Productos.css";
import { top } from "../../Helpers/Arrays/top_falda.js";
import "swiper/css";
import "swiper/css/navigation";
import Basepages from "../../Components/BasePage.jsx";

const Top = () => {

  return (
<Basepages title="TOP Y FALDAS" array={top}></Basepages>
  );
};

export default Top;
