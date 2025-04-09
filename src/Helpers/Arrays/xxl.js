/* export const xxl = Array.from({ length: 20 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO XXL',
  categoria: 'simple',
  precio: 'XXL LARGOS $70.000',
  precio2: 'XXL CORTOS $45.000',
  imageFront: `/XXL/xxl${i + 1}.jpg`
}));
 */

export const xxl = (() => {
  const totalImages = 20;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["160000", "80000"], // 1
    ["140000", "70000"], // 2
    ["180000", "90000"], // 3
    ["140000", "70000"], // 4
    ["140000", "70000"], // 5
    ["140000", "70000"], // 6
    ["140000", "70000"], // 7
    ["140000", "70000"], // 8
    ["140000", "70000"], // 9
    ["140000", "70000"], // 10
    ["140000", "70000"], // 11
    ["150000", "75000"], // 12
    ["200000", "100000"], // 13
    ["140000", "70000"], // 14
    ["140000", "70000"], // 15
    ["140000", "70000"], // 16
    ["140000", "70000"], // 17
    ["140000", "70000"], // 18
    ["140000", "70000"], // 19
    ["140000", "70000"], // 20
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
      imageFront: `/XXL/xxl${i}.jpg`,
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