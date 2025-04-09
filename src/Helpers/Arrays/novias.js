/* export const novias = Array.from({ length: 32 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO novias',
  categoria: 'simple',
  precio:
    'Novia con cola $200.000 Venta $400.000',
  
  imageFront: `/Novias/novias${i + 1}.jpeg`
})); */
export const novias = (() => {
  const totalImages = 32;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["0", "0"], // 1
    ["0", "0"], // 2
    ["0", "0"], // 3
    ["0", "0"], // 4
    ["0", "0"], // 5
    ["0", "0"], // 6
    ["0", "0"], // 7
    ["0", "0"], // 8
    ["0", "0"], // 9
    ["0", "0"], // 10
    ["0", "0"], // 11
    ["0", "0"], // 12
    ["0", "0"], // 13
    ["0", "0"], // 14
    ["0", "0"], // 15
    ["0", "0"], // 16
    ["0", "0"], // 17
    ["0", "0"], // 18
    ["0", "0"], // 19
    ["0", "0"], // 20
    ["0", "0"], // 21
    ["0", "0"], // 22
    ["0", "0"], // 23
    ["0", "0"], // 24
    ["0", "0"], // 25
    ["0", "0"], // 26
    ["0", "0"], // 27
    ["0", "0"], // 28
    ["0", "0"], // 30
    ["0", "0"], // 31
    ["0", "0"], // 32
  ];
  

  // Función para obtener el precio y alquiler según el índice
  const getPrecio = (index) => {
    if (index <= precios.length) {
      return precios[index - 1];
    } else {
      return precios[precios.length - 1] || ["0", "0"]; // Valor por defecto si no hay precios
    }
  };

  // Solo estos índices tienen imágenes adicionales. Formato: posición: cantidad de imágenes adicionales
  const hasVariantsMap = {
  };

  // Crear las ofertas base
  for (let i = 1; i <= totalImages; i++) {
    const [precio, alquiler] = getPrecio(i); // Obtener precio y alquiler
    ofertasMap.set(i, {
      id: 100 + i,
      title: 'VESTIDO Ofertas',
      categoria: 'simple',
      precio, // Asignar precio
      alquiler, // Asignar alquiler
      imageFront: `/Novias/novias${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Largos/largos${i}_${variantIndex}.jpg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();