import React from "react";

const Horarios = () => {
  const horarios = {
    titulo: "Horarios de Atención",
    disponibilidad: {
      dias: "Martes a Viernes de ",
      horarios: "09 a 13hs y de 17 a 21hs",
    },
    Direccion: {
      texto: "Direccion",
      direccion: "España 1875, Concepción",
    },
    Envio: {
      titulo: "¡Envíos disponibles!",
      texto_1: "¡Sin cargo y sin límites!",
      ubicacion_1: "San Miguel de Tucumán",
      especificacion_1: "(Venta y Alquiler)",
      texto_2: "¡Envíos gratis a partir de $100.000!",
      ubicacion_2: "A todo el país",
      especificacion_2: "(Solo para Venta)",
    },
    telefono: {
      texto: "Teléfono",
      numero: "+54 9 381 206 2925",
    },
  };
  return (
    <div className="bg-pink-500/60 text-white text-center py-8 px-6 rounded-2xl shadow-2xl mb-14 transform transition-all hover:scale-[1.01] hover:shadow-xl">
      {/* Encabezado con icono */}
      {/* Encabezado con icono */}
      <div className="flex justify-center items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-2 font-serif text-white drop-shadow-md">
          {horarios.titulo}
        </h3>
      </div>

      {/* Contenido en grid responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
        {/* Horarios */}
        <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg hover:scale-105">
          <div className="flex items-start mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div>
              <h4 className="text-xl font-bold mb-1">Horarios</h4>
              <p className="text-lg">
                {horarios.disponibilidad.dias}
                <span className="font-bold text-yellow-200">
                  {horarios.disponibilidad.horarios.split("y de")[0]}
                </span>
                y de{" "}
                <span className="font-bold text-yellow-200">
                  {horarios.disponibilidad.horarios.split("y de")[1]}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Dirección */}
        <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg hover:scale-105">
          <div className="flex items-start mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h4 className="text-xl font-bold mb-1">
                {horarios.Direccion.texto}
              </h4>
              <p className="text-lg font-bold text-yellow-200">
                {horarios.Direccion.direccion}
              </p>
            </div>
          </div>
        </div>

        {/* Envíos */}
        <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg hover:scale-105">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <div>
              <h4 className="text-xl font-bold mb-1">{horarios.Envio.titulo}</h4>
              <p className="text-lg mb-2 ">
                {horarios.Envio.texto_1} <br></br>
                <span className="font-bold text-yellow-200">
                  {horarios.Envio.ubicacion_1}
                </span>{" "}
                {horarios.Envio.especificacion_1}
              </p>
              <br></br>
              <p className="text-lg mb-2">
                {horarios.Envio.texto_2} <br></br>
                <span className="font-bold text-yellow-200">
                  {horarios.Envio.ubicacion_2}
                </span>{" "}
                {horarios.Envio.especificacion_2}
              </p>
            </div>
          </div>
        </div>

        {/* Teléfono */}
        <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg hover:scale-105">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <h4 className="text-xl font-bold mb-1">
                {horarios.telefono.texto}
              </h4>
              <a
                href={`tel:${horarios.telefono.numero.replace(/\s/g, "")}`}
                className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors duration-300 flex items-center"
              >
                {horarios.telefono.numero}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <div className="mt-8">
        <a
          href={`https://wa.me/${horarios.telefono.numero.replace(/\D/g, "")}`}
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479h.005c4.708 0 8.516-3.844 8.516-8.593 0-2.193-.85-4.252-2.393-5.801-1.544-1.55-3.592-2.402-5.783-2.402-4.707 0-8.52 3.844-8.52 8.594 0 1.766.57 3.421 1.588 4.788l-1.007 3.675 3.902-1.039zm11.602-5.434c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Horarios;
