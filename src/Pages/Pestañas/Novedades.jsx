import { useEffect } from "react";
import News from "../../Components/News";
import Horarios from "../../Components/Horarios";

const Novedades = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: "smooth", // Añadir desplazamiento suave
    });
  }, []);

  return (
    <>
      <News title={true}></News>
      <Horarios></Horarios>
    </>
  );
};
export default Novedades;
