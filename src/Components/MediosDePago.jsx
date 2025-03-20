import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { motion } from 'framer-motion';
import VisaImage from '../Images/Tarjetas/Visa.png';
import NaranjaImage from '../Images/Tarjetas/Naranja.jpg';
import MasterImage from '../Images/Tarjetas/Master.png';

const MediosDePago = () => {
  return (
    <motion.div
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }} // Animación inicial
      animate={{ opacity: 1, y: 0 }} // Animación cuando se entra
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <h2 className="text-2xl font-semibold mb-6 text-center uppercase">
        Medios de Pago
      </h2>

      <div className="flex flex-wrap justify-center space-x-6 space-y-6 sm:space-y-0">
        {/* Visa */}
        <motion.div
          className="flex flex-col items-center space-x-2"
          whileHover={{ scale: 1.1 }} // Efecto de hover
          whileTap={{ scale: 0.9 }} // Efecto de toque
        >
          <img
            src={VisaImage}
            alt="Naranja"
            className="w-16 h-16 object-contain"
          />
          {/* <FaCcVisa size={40} className="text-blue-500" /> */}
          {/* <p className="text-lg font-medium">Visa</p> */}
        </motion.div>

        {/* Mastercard */}
        <motion.div
          className="flex flex-col items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* <FaCcMastercard size={40} className="text-red-500" /> */}
          <img
            src={MasterImage}
            alt="Naranja"
            className="w-16 h-16 object-contain"
          />
          {/* <p className="text-lg font-medium">Mastercard</p> */}
        </motion.div>

        {/* American Express */}
        <motion.div
          className="flex flex-col items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCcAmex size={60} className="text-green-500" />
          {/* <p className="text-lg font-medium">American Express</p> */}
        </motion.div>

        {/* Naranja */}
        <motion.div
          className="flex flex-col items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={NaranjaImage}
            alt="Naranja"
            className="w-16 h-16 object-contain"
          />
          {/* <p className="text-lg font-medium">Naranja</p> */}
        </motion.div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Aceptamos pagos con tarjetas de crédito y débito</p>
      </div>
    </motion.div>
  );
};

export default MediosDePago;
