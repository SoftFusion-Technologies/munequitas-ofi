/* export const faldas = Array.from({ length: 30    }, (_, i) => ({
  id: 201 + i, // Puedes cambiar el rango de IDs si lo necesitas
  title: 'FALDAS',
  categoria: 'simple',
  precio: 'Faldas amplias $110.000 - Polleras amplias $200.000 - Otras $70.000',
  imageFront: `/Faldas/faldas${i + 1}.jpeg`
})); */

export const faldas = (() => {
  const totalImages = 28;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["60000", "30000"], // 1
    ["60000", "30000"], // 2
    ["70000", "35000"], // 3
    ["70000", "35000"], // 4
    ["60000", "30000"], // 5
    ["50000", "25000"], // 6
    ["40000", "25000"], // 7
    ["70000", "35000"], // 8
    ["70000", "35000"], // 9
    ["220000", "110000"], // 10
    ["220000", "110000"], // 11
    ["220000", "110000"], // 12
    ["60000", "30000"], // 13
    ["30000", "15000"], // 14
    ["85000", "40000"], // 15
    ["60000", "30000"], // 16
    ["60000", "30000"], // 17
    ["70000", "35000"], // 18
    ["70000", "35000"], // 19
    ["60000", "30000"], // 20
    ["60000", "30000"], // 21
    ["220000", "110000"], // 22
    ["220000", "110000"], // 23
    ["60000", "30000"], // 24
    ["30000", "15000"], // 25
    ["60000", "30000"], // 26
    ["120000", "60000"], // 27
    ["120000", "60000"], // 28
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
    27: 1,
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
      imageFront: `/Faldas/faldas${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Faldas/faldas${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();