import React from "react";
import "../../Styles/Productos.css";
import { ofertas } from "../../Helpers/Arrays/ofertas.js";
import BasePage from "../../Components/BasePage.jsx";

const Ofertas = () => {
  return (
    <BasePage solo_venta={true} array={ofertas} title={"REMATES"}></BasePage>
  );
};

export default Ofertas;
