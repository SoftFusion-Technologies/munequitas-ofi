import React, { useEffect, useState } from "react";
import "../../Styles/Productos.css";
import { Link } from "react-router-dom"; // Importar Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductNotFound from "../../Components/ProductNotFound.jsx";
import { ofertas } from "../../Helpers/Arrays/ofertas.js";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Horarios from "../../Components/Horarios.jsx";

const Ofertas = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
/*   useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: "smooth", // Añadir desplazamiento suave
    });
  }, []);
 */
  // Estado para manejar la búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  const handleWhatsAppClick = (nombre, precio) => {
    const phoneNumber = "+5493812062925"; // Número de WhatsApp
    const message = `Hola, estoy interesado en un producto.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  // Filtrar productos basados en el término de búsqueda

  const filteredProductos = ofertas.filter((producto) =>
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
        <h1 className="text-rosa-pastel mt-10 text-3xl font-bold text-center sm:text-5xl mb-8 font-bignoodle">
          REMATES
        </h1>
      )}
      {/* Grid de productos, se adapta a 3 o 4 por fila */}
      {/* Grid de productos, adaptable a diferentes tamaños */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProductos.map((producto, index) => (
          <Link
            key={producto.id}
            // to={`/product/${producto.id}/${encodeURIComponent(producto.title)}`}
            className="relative border border-gray-200 rounded-xl shadow-md overflow-hidden group bg-white hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="relative w-full min-h-[400px] sm:h-auto bg-white bg-opacity-80 backdrop-blur-md rounded-t-lg">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                {producto.images && producto.images.length >= 1 ? (
                  <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={1}
                    className="h-full"
                  >
                    {/* Mostramos la imagen frontal primero */}
                    <SwiperSlide>
                      <img
                        src={producto.imageFront}
                        alt={producto.title}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    {/* Luego mostramos el resto de imágenes del array */}
                    {producto.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`${producto.title} - imagen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <>
                    <img
                      src={producto.imageFront}
                      alt={producto.title}
                      className="w-full h-full object-cover opacity-100 group-hover:opacity-0 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                    />
                    {producto.imageFront && (
                      <img
                        src={producto.imageFront}
                        alt={`${producto.title} espalda`}
                        className="w-full h-full object-contain opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="p-4 bg-white bg-opacity-70 backdrop-blur-lg rounded-b-lg shadow-md text-center">
              {/* <h3 className="text-pink-600 text-xl font-semibold">
                {producto.title}
              </h3>
              <p className="text-lg text-gray-600">{producto.precio}</p>
              <p className="uppercase text-xs mt-2 mb-2">
                {producto.newPrecio}
              </p> */}

              {/* Botón de compra con redirección a WhatsApp */}
              <p className="text-gray-400 text-sm mb-1">Producto {index + 1}</p>
              <p className="text-sm text-gray-500 italic mb-2">
                {producto.descripcion ? (
                  producto.descripcion.toUpperCase()
                ) : (
                  <span className="text-gray-300">Sin descripción</span>
                )}
              </p>

              <button
                className="bg-rosa-pastel hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-lg mt-2 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleWhatsAppClick(producto.title, producto.precio);
                }}
              >
                COMPRAR{" "}
                {producto.precio !== "0"
                  ? `$${Number(producto.precio).toLocaleString("es-AR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : ""}
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
      <div className="mt-16">
        <Horarios></Horarios>
      </div>
    </div>
  );
};

export default Ofertas;
