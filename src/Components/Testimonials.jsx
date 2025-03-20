import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Importa el ícono de Google

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Fernández',
      feedback:
        '¡Me encantó el vestido que alquilé para mi boda en Muñequita Alquiler! Fue perfecto y me sentí como una princesa.'
    },
    {
      name: 'Sofía Ramírez',
      feedback:
        'Compré un vestido hermoso para mi hija en Muñequita y le quedó espectacular. ¡Definitivamente volveré!'
    },
    {
      name: 'Valeria Gómez',
      feedback:
        'El servicio de alquiler es excelente, encontré el vestido ideal para una gala y parecía hecho a medida. ¡Gracias, Muñequita Alquiler!'
    }
  ];
  return (
    <div className="bg-gradient-to-r from-[#795059] via-[#9e5e63] to-[#5a2e32] py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="font-bignoodle text-center text-3xl sm:text-4xl font-extrabold text-white uppercase mb-8">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <p className="text-gray-700 text-lg italic mb-4">
              {testimonial.feedback}
            </p>
            <div className="flex items-center justify-end space-x-2">
              <FaGoogle className="text-pink-700" /> {/* Ícono de Google */}
              <p className="text-pink-700 font-bold">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
