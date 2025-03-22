import { useState, useEffect } from 'react';

const Turnero = () => {
  // Desplazar hacia la parte superior cuando el componente se monte
  useEffect(() => {
    window.scrollTo({
      top: 0, // Desplazar hacia arriba de la página
      behavior: 'smooth' // Añadir desplazamiento suave
    });
  }, []);
  // Función para hacer el scroll hacia la sección

  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [fecha, setFecha] = useState('');
  const [categoria, setCategoria] = useState('VESTIDOS LARGOS');
  const [detalle, setDetalle] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const opciones = [
    'VESTIDOS LARGOS',
    'VESTIDOS CORTOS',
    'VESTIDOS NENAS',
    'NOVIAS'
  ];

  const handleSubmit = () => {
    if (!nombre || !celular || !fecha) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Formatear fecha a DD/MM/YYYY
    const fechaObj = new Date(`${fecha}T00:00:00`);
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES');

    // Construir mensaje para WhatsApp
    const mensaje = `Hola, quiero solicitar un turno:%0A
    - Nombre: ${nombre}%0A
    - Celular: ${celular}%0A
    - Fecha: ${fechaFormateada}%0A
    - Detalles: ${detalle}%0A
    - Categoría: ${categoria}`;

    // Número de WhatsApp
    const telefono = '3812062925';

    // Abrir WhatsApp en una nueva ventana
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');

    // Mostrar mensaje de confirmación
    setMensajeEnviado(true);

    // Limpiar el formulario después de 3 segundos
    setTimeout(() => {
      setNombre('');
      setCelular('');
      setFecha('');
      setCategoria('VESTIDOS LARGOS');
      setMensajeEnviado('');
      setMensajeEnviado(false);
    }, 3000);
  };

  // Función para verificar si el día es martes, miércoles o jueves
  const esDiaHabil = (dateString) => {
    const date = new Date(`${dateString}T00:00:00`);
    const diaSemana = date.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    return diaSemana === 2 || diaSemana === 3 || diaSemana === 4; // Martes (2), Miércoles (3), Jueves (4)
  };

  // Función para avanzar al próximo día habil
  const obtenerProximoDiaHabil = (dateString) => {
    let dateObj = new Date(`${dateString}T00:00:00`);

    while (!esDiaHabil(dateObj.toISOString().split('T')[0])) {
      dateObj.setDate(dateObj.getDate() + 1);
    }

    return dateObj.toISOString().split('T')[0];
  };

  const handleChangeFecha = (e) => {
    const nuevaFecha = e.target.value;

    if (esDiaHabil(nuevaFecha)) {
      setFecha(nuevaFecha);
    } else {
      alert('Solo puedes seleccionar martes, miércoles o jueves.');
      const nuevoDiaHabil = obtenerProximoDiaHabil(nuevaFecha);
      setFecha(nuevoDiaHabil); // Ajustar al próximo día habil
    }
  };

  return (
    <div className="mt-20 mb-20 max-w-lg mx-auto p-8 bg-gradient-to-r from-[#795059] via-[#9e5e63] to-[#5a2e32] shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Solicitar Turno
      </h2>

      {/* Nombre Completo */}
      <input
        type="text"
        placeholder="Nombre Completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />

      {/* Número de Celular */}
      <input
        type="tel"
        placeholder="Número de Celular"
        value={celular}
        onChange={(e) => setCelular(e.target.value)}
        className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />

      <div className="w-full flex flex-col mb-4">
        <label className="text-white text-sm font-medium mb-1">
          Fecha de Visita
        </label>
        <input
          type="date"
          value={fecha}
          onChange={handleChangeFecha}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-gray-700 bg-white cursor-pointer"
        />
      </div>

      {/* Categoría */}
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="w-full p-4 mb-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>

      <div className="w-full flex flex-col mb-4">
        {/* <label className="text-gray-700 text-sm font-medium mb-1">
          Detalles
        </label> */}
        <textarea
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          placeholder="Puedes especificar el talle, color, etc."
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-gray-700 bg-white resize-none"
          rows="3"
        />
      </div>
      {/* Botón de Enviar */}
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
      >
        Enviar a WhatsApp
      </button>

      {/* Mensaje de éxito */}
      {mensajeEnviado && (
        <p className="mt-4 text-green-500 font-semibold text-center">
          ✅ ¡Mensaje enviado con éxito!
        </p>
      )}
    </div>
  );
};

export default Turnero;
