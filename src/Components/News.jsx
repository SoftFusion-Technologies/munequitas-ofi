import { novedades } from "../Helpers/Arrays/novedades";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const News = ({ title = false }) => {
  const [muted, setMuted] = useState(false);  // Iniciar en "muted"
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();  
        } else if (videoRef.current) {
          videoRef.current.pause(); 
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-100">
      {/* Título de la sección, solo si title es verdadero */}
      {title && (
        <h2 className="text-center text-[#d4af37] text-4xl sm:text-6xl font-bold mb-12 font-bignoodle tracking-wide drop-shadow-md uppercase">
          Novedades
        </h2>
      )}

      <div className="grid grid-cols-1 p-0 xl:p-14 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {novedades.map((item) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-xl shadow-lg group"
            style={{ backgroundColor: "rgba(253,102,195,255)", opacity: 0.4 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {item.type === "video" ? (
              <div className="relative group">
                <video
                  ref={videoRef}
                  src={item.imageFront}
                  loop
                  muted={muted}
                  className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-90 cursor-pointer"
                  onClick={toggleMute}
                  autoPlay // Asegura que el video se reproduzca al cargar
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  {muted && (
                    <span className="bg-black bg-opacity-50 text-white text-2xl px-4 py-2 rounded-full">
                      🔇Silenciado
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <motion.img
                src={item.imageFront}
                alt={`Novedad ${item.id}`}
                className="w-full h-auto object-contain bg-white transition-transform duration-500 group-hover:scale-90"
              />
            )}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
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
