import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { motion } from 'framer-motion';
import VisaImage from '../Images/Tarjetas/Visa.png';
import NaranjaImage from '../Images/Tarjetas/Naranja.jpg';
import AmericanImage from '../Images/Tarjetas/American_Expr.png';
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

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {/* Visa */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={VisaImage}
            alt="Visa"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        {/* Mastercard */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={MasterImage}
            alt="Mastercard"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        {/* American Express */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={AmericanImage}
            alt="American Express"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        {/* Naranja */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={NaranjaImage}
            alt="Naranja"
            className="w-20 h-20 object-contain"
          />
        </motion.div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Aceptamos pagos con tarjetas de crédito y débito</p>
      </div>
    </motion.div>
  );
};

export default MediosDePago;
