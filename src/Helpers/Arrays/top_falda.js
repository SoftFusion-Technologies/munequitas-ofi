/* export const top = Array.from({ length: 69 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO TOP O FALDA',
  categoria: 'simple',
  precio:
    'Top más economicos: $85.000. Top y faldas trabajados $100.000 - Top y falda básicos $70.000 - Venta $160.000',
  descripcion: 'Pueden optar por el top y falda que gusten.',
  imageFront: `/Top/top${i + 1}.jpeg`
}));
 */

export const top = (() => {
  const totalImages = 61;
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
    ["0", "0"], // 29
    ["0", "0"], // 30
    ["0", "0"], // 31
    ["0", "0"], // 32
    ["0", "0"], // 33
    ["0", "0"], // 34
    ["0", "0"], // 35
    ["0", "0"], // 36
    ["0", "0"], // 37
    ["0", "0"], // 38
    ["0", "0"], // 39
    ["0", "0"], // 40
    ["0", "0"], // 41
    ["0", "0"], // 42
    ["0", "0"], // 43
    ["0", "0"], // 44
    ["0", "0"], // 45
    ["0", "0"], // 46
    ["0", "0"], // 47
    ["0", "0"], // 48
    ["0", "0"], // 49
    ["0", "0"], // 50
    ["0", "0"], // 51
    ["0", "0"], // 52
    ["0", "0"], // 53
    ["0", "0"], // 54
    ["0", "0"], // 55
    ["0", "0"], // 56
    ["0", "0"], // 57
    ["0", "0"], // 58
    ["0", "0"], // 59
    ["0", "0"], // 60
    ["0", "0"], // 61
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
    18: 1,
    23: 1,
    26: 1,
    40: 1,
    52: 1,
    53: 1,
    56: 1,
    57: 1,
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
      imageFront: `/Top/top${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Top/top${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();