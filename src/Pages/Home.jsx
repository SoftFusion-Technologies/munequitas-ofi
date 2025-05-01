import React from "react";

import Hero from "../Components/Hero";
import InfoSection from "../Components/InfoSection";
import FeaturedProducts from "./FeaturedProducts";
import Horarios from "../Components/Horarios";
import Ofertas from "../Components/Ofertas";

import MediosDePago from "../Components/MediosDePago";
import MediosDeEnvio from "../Components/MediosDeEnvio";
import Testimonials from "../Components/Testimonials";
import News from "../Components/News";
const Home = () => {
  return (
    <div>
      <Ofertas />
      <Hero />
      <InfoSection />
      <Horarios />
      <div className="-mt-20">
        {" "}
        <News /> <FeaturedProducts />{" "}
      </div>
      <div className="-mt-20"> </div>
      {/* Contenedor flex para mostrar los componentes en una fila */}
      <div className="flex flex-col sm:flex-row justify-between space-x-4 px-6 py-8">
        <div className="flex-1 mb-4 sm:mb-0">
          <MediosDePago />
        </div>
        <div className="flex-1">
          <MediosDeEnvio />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
