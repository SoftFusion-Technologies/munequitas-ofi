import React, { useEffect, useState } from 'react';
import '../../Styles/Productos.css';
import { Link } from 'react-router-dom'; // Importar Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductNotFound from '../../Components/ProductNotFound.jsx';
import { faldas } from '../../Helpers/Arrays/faldas.js';

const Faldas = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);

  // Estado para manejar la búsqueda
  const [searchQuery, setSearchQuery] = useState('');

  const handleWhatsAppClick = (nombre, precio) => {
    const phoneNumber = '3812062925'; // Número de WhatsApp
    const message = `Hola, estoy interesado en un producto.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };
  // Filtrar productos basados en el término de búsqueda

  const filteredProductos = faldas.filter((producto) =>
    producto.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="productos-container py-16 px-4 sm:px-8">
      <h2 className="text-center text-[#d4af37] text-4xl sm:text-6xl font-bold mb-6 font-bignoodle tracking-wide drop-shadow-md uppercase">
        Nuestros Vestidos
      </h2>
      {/* Campo de búsqueda */}
      <div className="relative mb-8">
        {/* Input con lupa */}
        {/* <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="p-2 border border-pink-300 rounded-lg w-full sm:w-1/3 mx-auto pl-10"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400"
        /> */}
      </div>

      {filteredProductos.some(
        (producto) => producto.categoria === "simple"
      ) && (
        <h1 className="text-center text-rosa-pastel mt-10 text-xl font-bold sm:text-5xl mb-8 font-bignoodle">
          Faldas
        </h1>
      )}
      {/* Grid de productos, se adapta a 3 o 4 por fila */}
      {/* Grid de productos, adaptable a diferentes tamaños */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProductos.map((producto, index) => (
          <div
            key={producto.id}
            className="flex flex-col h-full border border-gray-200 rounded-xl shadow-md overflow-hidden group bg-white hover:shadow-xl transition-transform transform hover:scale-105"
          >
            {/* Fixed height image container */}
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={producto.imageFront}
                alt={producto.title}
                className="w-full h-full object-cover opacity-100 group-hover:opacity-0 absolute top-0 left-0 transition-opacity duration-500 ease-in-out"
              />
              {producto.imageFront && (
                <img
                  src={producto.imageFront}
                  alt={`${producto.title} espalda`}
                  className="w-full h-full object-contain opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                />
              )}
            </div>

            {/* Content container with fixed height */}
            <div className="p-4 bg-white flex-grow flex flex-col justify-between">
              <div className="text-center">
                <p className="text-gray-400 text-sm mt-2">
                  Producto {index + 1}
                </p>
                <p className="text-base text-gray-600 font-medium">
                  Faldas amplias $110.000 - Polleras amplias $200.000 - Otras
                  $70.000
                </p>
              </div>

              <button
                className="w-full bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-lg mt-4 transition"
                onClick={() =>
                  handleWhatsAppClick(producto.title, producto.precio)
                }
              >
                COMPRAR - ALQUILAR
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de "No se encontraron productos" */}
      {filteredProductos.length === 0 && (
        <div className="-mt-56">
          <ProductNotFound />
        </div>
      )}
    </div>
  );
};

export default Faldas;
