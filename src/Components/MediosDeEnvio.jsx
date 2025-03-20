import { motion } from 'framer-motion'; // Importar Framer Motion
import CorreoArgentinoLogo from '../Images/Correos/correo-argentino.svg'; // Imagen de Correo Argentino
import AndreaniLogo from '../Images/Correos/Logo-Andreani.jpg'; // Imagen de Andreani

const MediosDeEnvio = () => {
  return (
    <motion.div
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }} // Animación de entrada
      animate={{ opacity: 1, y: 0 }} // Animación cuando entra
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <h2 className="text-2xl font-semibold mb-6 text-center uppercase">
        Medios de Envío
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {/* Correo Argentino */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={CorreoArgentinoLogo}
            alt="Correo Argentino"
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        {/* Andreani */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={AndreaniLogo}
            alt="Andreani"
            className="w-24 h-24 object-contain"
          />
        </motion.div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        {/* <p>Selecciona el medio de envío que prefieras</p> */}
      </div>
    </motion.div>
  );
};

export default MediosDeEnvio;
