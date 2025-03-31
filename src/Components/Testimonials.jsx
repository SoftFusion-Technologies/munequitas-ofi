import React, { useState, useEffect } from 'react';
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
    },
    {
      name: 'Mariana Torres',
      feedback:
        'Muñequita tiene una gran variedad de vestidos y la atención fue increíble. ¡100% recomendado!'
    },
    {
      name: 'Camila Suárez',
      feedback:
        'Mi mejor amiga me recomendó Muñequita y fue la mejor decisión. Alquilé un vestido para un evento y quedé encantada.'
    },
    {
      name: 'Lorena Mendoza',
      feedback:
        '¡Los vestidos son hermosos y de excelente calidad! Sin duda, volveré a alquilar aquí.'
    },
    {
      name: 'Julieta Pérez',
      feedback:
        'Un lugar maravilloso para encontrar vestidos espectaculares. Muy buena experiencia.'
    }
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.slice(0, 3) // Mostrar los primeros 3 testimonios
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Activar animación de salida

      setTimeout(() => {
        setVisibleTestimonials((prev) => {
          const nextIndex =
            (testimonials.indexOf(prev[2]) + 1) % testimonials.length;
          return [prev[1], prev[2], testimonials[nextIndex]];
        });
        setFade(false); // Activar animación de entrada
      }, 500); // Tiempo para la animación de salida
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-rosa-pastel   from-[#795059] via-[#9e5e63] to-[#5a2e32] py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="font-bignoodle text-center text-3xl sm:text-4xl font-extrabold text-white uppercase mb-8">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ${
              fade ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-gray-700 text-lg italic mb-4">
              {testimonial.feedback}
            </p>
            <div className="flex items-center justify-end space-x-2">
              <FaGoogle className="text-pink-700" />
              <p className="text-pink-700 font-bold">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
