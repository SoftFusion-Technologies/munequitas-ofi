import React, { useEffect, useState } from 'react';
import '../../Styles/Productos.css';
import { Link } from 'react-router-dom'; // Importar Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductNotFound from '../../Components/ProductNotFound.jsx';
import { quince } from '../../Helpers/Arrays/quince.js';

const Quince = () => {
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

  const filteredProductos = quince.filter((producto) =>
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
        (producto) => producto.categoria === 'simple'
      ) && (
        <h1 className="text-rosa-pastel mt-10 text-3xl font-bold text-center sm:text-5xl mb-8 font-bignoodle">
          DE 15 AÑOS
        </h1>
      )}
      {/* Grid de productos, se adapta a 3 o 4 por fila */}
      {/* Grid de productos, adaptable a diferentes tamaños */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProductos.map((producto) => (
          <Link
            key={producto.id}
            // to={`/product/${producto.id}/${encodeURIComponent(producto.title)}`}
            className="relative border border-gray-300 rounded-xl shadow-lg overflow-hidden group bg-gradient-to-b from-green-100 to-blue-50 hover:shadow-2xl transition"
          >
            <div className="relative w-full h-80 bg-white bg-opacity-80 backdrop-blur-md rounded-t-lg">
              <img
                src={producto.imageFront}
                alt={producto.title}
                className="w-full h-full object-cover opacity-100 group-hover:opacity-0 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
              />
              {/* -- luego si hay imagen back cambiar */}
              <img
                src={producto.imageFront}
                alt={`${producto.title} espalda`}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
              />
            </div>
            <div className="p-4 bg-white bg-opacity-70 backdrop-blur-lg rounded-b-lg shadow-md text-center">
              {/* <h3 className="text-pink-600 text-xl font-semibold">
                {producto.title}
              </h3>
              <p className="text-lg text-gray-600">{producto.precio}</p>
              <p className="uppercase text-xs mt-2 mb-2">
                {producto.newPrecio}
              </p> */}

              <p className="text-lg text-gray-600">{producto.precio}</p>
              <p className="text-lg text-gray-600">{producto.precio2}</p>
              {/* Botón de compra con redirección a WhatsApp */}
              <button
                className="bg-rosa-pastel hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-lg mt-2 transition"
                onClick={() =>
                  handleWhatsAppClick(producto.title, producto.precio)
                }
              >
                COMPRAR - ALQUILAR
              </button>
            </div>
          </Link>
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

export default Quince;
