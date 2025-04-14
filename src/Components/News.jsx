import { novedades } from "../Helpers/Arrays/novedades";
import { motion } from "framer-motion";
const News = ({ title = false }) => {
  return (
    <div className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-100">
      {/* Información destacada */}
      {title ? (
        <h2 className="text-center text-[#d4af37] text-4xl sm:text-6xl font-bold mb-12 font-bignoodle tracking-wide drop-shadow-md uppercase">
          Novedades
        </h2>
      ) : null}

      <div className="grid grid-cols-1 p-0 xl:p-14 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {novedades.map((item) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-xl shadow-lg group"
            style={{ backgroundColor: "rgba(253,102,195,255)", opacity: 0.4 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Imagen con animación */}
            <motion.img
              src={item.imageFront}
              alt={item.title}
              className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-90"
              whileHover={{ scale: 1.1 }}
            />
            {/* Overlay con título */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
