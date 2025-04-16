import React from "react";
import "../../Styles/Productos.css";
import { quince } from "../../Helpers/Arrays/quince.js";
import BasePage from "../../Components/BasePage.jsx";

const Quince = () => {
  return (
    <BasePage solo_venta={false} array={quince} title={"QUINCE"}></BasePage>
  );
};

export default Quince;
