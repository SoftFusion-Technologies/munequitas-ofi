/* export const largos = Array.from({ length: 117 }, (_, i) => ({
  id: 85 + i,
  title: 'VESTIDO largos',
  categoria: 'simple',
  precio: '$80.000',
  imageFront: `/Largos/largos${i + 1}.jpeg`
}));
 */
export const largos = (() => {
  const totalImages = 85;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["45000", "35000"], // 1
    ["0", "0"], // 2 //No esta a la venta
    ["50000", "30000"], // 3
    ["45000", "25000"], // 4
    ["0", "0"], // 5
    ["45000", "30000"], // 6
    ["0", "0"], // 7
    ["0", "0"], // 8
    ["0", "0"], // 9
    ["0", "0"], // 10
    ["0", "0"], // 11
    ["0", "0"], // 12
    ["50000", "30000"], // 13
    ["0", "0"], // 14
    ["0", "0"], // 15
    ["0", "0"], // 16
    ["0", "0"], // 17
    ["0", "0"], // 18
    ["0", "0"], // 19
    ["0", "0"], // 20
    ["50000", "30000"], // 21
    ["0", "0"], // 22
    ["50000", "30000"], // 23
    ["0", "0"], // 24
    ["0", "0"], // 25
    ["0", "0"], // 26
    ["70000", "30000"], // 27
    ["70000", "35000"], // 28
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
    ["0", "0"], // 62
    ["0", "0"], // 63
    ["0", "0"], // 64
    ["0", "0"], // 65
    ["0", "0"], // 66
    ["0", "0"], // 67
    ["0", "0"], // 68
    ["0", "0"], // 69
    ["0", "0"], // 70
    ["0", "0"], // 71
    ["80000", "40000"], // 72
    ["60000", "30000"], // 73
    ["0", "0"], // 74
    ["0", "0"], // 75
    ["0", "0"], // 76
    ["0", "0"], // 77
    ["0", "0"], // 78
    ["0", "0"], // 79
    ["0", "0"], // 80
    ["0", "0"], // 81
    ["0", "0"], // 82
    ["0", "0"], // 83
    ["0", "0"], // 84
    ["", "100000"], // 85
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
    5: 2,
    8: 1,
    9: 1,
    10: 1,
    11: 2,
    12: 1,
    13: 1,
    19: 1,
    20: 1,
    23: 1,
    26: 1,
    32: 1,
    33: 1,
    34: 1,
    37: 1,
    38: 1,
    39: 1,
    53: 1,
    66: 1,
    67: 1,
    68: 1,
    76: 1,
    81: 1,
    84: 1,
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
      imageFront: `/Largos/largos${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Largos/largos${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();