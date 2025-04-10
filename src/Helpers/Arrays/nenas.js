/* export const nenas = Array.from({ length: 28 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO nenas',
  categoria: 'simple',
  precio: '$40.000',
  imageFront: `/Nenas/nenas${i + 1}.jpg`
}));

 */
export const nenas = (() => {
  const totalImages = 22;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["60000", "35000"], // 1
    ["60000", "35000"], // 2
    ["45000", "30000"], // 3
    ["60000", "35000"], // 4
    ["60000", "35000"], // 5
    ["70000", "40000"], // 6
    ["60000", "30000"], // 7
    ["0", "0"],         // 8
    ["70000", "40000"], // 9
    ["60000", "35000"], // 10
    ["40000", "25000"], // 11
    ["80000", "40000"], // 12
    ["80000", "40000"], // 13
    ["120000", "60000"], // 14
    ["80000", "50000"], // 15
    ["80000", "40000"], // 16
    ["70000", "35000"], // 17
    ["18000", "9000"],  // 18
    ["20000", "10000"], // 19
    ["120000", "50000"], // 20
    ["20000", "12000"], // 21
    ["80000", "40000"], // 22
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
    9: 1,
    11: 2,
    13: 1,
    15: 2,
    20: 1,
    22: 1,
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
      imageFront: `/Nenas/nenas${i}.jpg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Nenas/nenas${i}_${variantIndex}.jpg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();