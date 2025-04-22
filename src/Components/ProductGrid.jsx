// src/Components/ProductGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductGrid = ({ productos, solo_venta }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {productos.map((producto, index) => (
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
                  <SwiperSlide>
                    <img
                      src={producto.imageFront}
                      alt={producto.title}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
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
            <p className="text-gray-400 text-sm mb-1">Producto {index + 1}</p>
            <p className="text-gray-400 text-sm mb-1">
              {producto.marca ? producto.marca.toUpperCase() : <br></br>}
            </p>
            <p className="text-sm text-gray-500 italic mb-2">
              {producto.descripcion ? (
                producto.descripcion.toUpperCase()
              ) : (
                <span className="text-gray-300">Sin descripción</span>
              )}
            </p>

            {solo_venta === true ? (
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
            ) : (
              <div
                className={`space-x-2 grid ${
                  producto.precio !== "" ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                <button
                  className="bg-rosa-pastel hover:bg-pink-900 text-white text-sm font-bold py-2 rounded-lg mt-2 transition "
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsAppClick(producto.title, producto.precio);
                  }}
                >
                  COMPRAR <br></br>
                  {producto.precio !== "0"
                    ? `$${Number(producto.precio).toLocaleString("es-AR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`
                    : null}
                </button>

                <button
                  className="bg-rosa-pastel hover:bg-pink-900 text-white text-sm font-bold py-2 rounded-lg mt-2 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsAppClick(producto.title, producto.precio);
                  }}
                >
                  ALQUILER<br></br>
                  {producto.alquiler !== "0"
                    ? `$${Number(producto.alquiler).toLocaleString("es-AR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`
                    : null}
                </button>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
