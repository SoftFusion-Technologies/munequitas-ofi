import React from 'react';
import { products } from '../Helpers/productsPremium.js'; // Importar los productos

const FeaturedProducts = () => {
  const phoneNumber = '5493812062925'; // Número de WhatsApp

  return (
    <section id="featured-products" className="py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-screen-lg">
        {products.map((product) => {
          // Mensaje prellenado para WhatsApp
          const message = encodeURIComponent(
            `Hola! Estoy interesado en un vestido.`
          );
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

          return (
            <a
              key={product.id}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative border border-gray-300 rounded-xl shadow-lg overflow-hidden group bg-gradient-to-b from-green-100 to-blue-50"
            >
              <div className="relative w-full h-80 bg-white bg-opacity-80 backdrop-blur-md rounded-t-lg">
                <img
                  src={product.imageFront}
                  alt={`${product.title} frente`}
                  className="w-full h-full object-cover opacity-100 group-hover:opacity-0 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                />
                <img
                  src={product.imageBack}
                  alt={`${product.title} espalda`}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-1000 ease-in-out"
                />
              </div>
              {/* <div className="p-4 bg-white bg-opacity-70 backdrop-blur-lg rounded-b-lg shadow-md">
                  <h3 className="text-pink-600 text-xl font-semibold font-bignoodle text-center">
                    {product.title}
                  </h3>
              </div> */}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
