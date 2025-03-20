import React from 'react';

import Hero from '../Components/Hero';
import MediosDePago from '../Components/MediosDePago';
import MediosDeEnvio from '../Components/MediosDeEnvio';
const Home = () => {
  return (
    <div>
      <Hero />
      {/* Contenedor flex para mostrar los componentes en una fila */}
      <div className="flex flex-col sm:flex-row justify-between space-x-4 px-6 py-8">
        <div className="flex-1 mb-4 sm:mb-0">
          <MediosDePago />
        </div>
        <div className="flex-1">
          <MediosDeEnvio />
        </div>
      </div>
    </div>
  );
};

export default Home;
