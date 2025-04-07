import React, { useEffect, useState } from 'react';
import ImgHero1 from '../Images/Hero/hero1.jpeg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section
      className="relative h-auto lg:h-screen p-20 sm:p-40 lg:p-0 bg-cover bg-[position:right_-130px_top] lg:bg-center bg-container"
      style={{ backgroundImage: `url(${ImgHero1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
      {/* Overlay para oscurecer la imagen */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
        <div className="text-center">
          <motion.h1
            className="uppercase font-bignoodle text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Encuentra el vestido perfecto para cada ocasión
          </motion.h1>

          <motion.p
            className="font-mono font-semibold text-lg sm:text-xl lg:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            Vestidos cortos, largos, de novia y para niñas. Alquila el look
            ideal en <span className="font-bold">Muñequita</span>.
          </motion.p>
        </div>

        <button
          onClick={() => navigate('/turnero')}
          className="uppercase bg-white text-black font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-rosa-pastel hover:text-white"
        >
          Solicitar Turno
        </button>
      </div>
    </section>
  );
};

export default Hero;
