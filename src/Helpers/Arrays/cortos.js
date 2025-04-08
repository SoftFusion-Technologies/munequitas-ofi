/* export const cortos = Array.from({ length: 74 }, (_, i) => ({
  id: 201 + i, // Puedes cambiar el rango de IDs si lo necesitas
  title: 'VESTIDO CORTO',
  categoria: 'simple',
  precio: 'XXL CORTOS $45.000',
  imageFront: `/Cortos/cortos${i + 1}.jpeg`
}));
 */

export const cortos = (() => {
  const totalImages = 61;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["80000", "30000", "marca Tucci"], // 1
    ["80000", "30000", "marca Silenzio"], // 2
    ["150000", "40000", "de diseño"], // 3
    ["60000", "20000", ""], // 4
    ["60000", "20000", ""], // 5
    ["100000", "50000", "de diseño"], // 6
    ["50000", "20000", ""], // 7
    ["80000", "30000", ""], // 8
    ["80000", "30000", "marca Zara"], // 9
    ["30000", "15000", ""], // 10
    ["50000", "25000", ""], // 11
    ["50000", "25000", ""], // 12
    ["40000", "20000", ""], // 13
    ["25000", "15000", ""], // 14
    ["25000", "15000", ""], // 15
    ["60000", "30000", ""], // 16
    ["120000", "50000", "de diseño"], // 17
    ["30000", "15000", ""], // 18
    ["40000", "15000", ""], // 19
    ["35000", "15000", ""], // 20
    ["30000", "15000", ""], // 21
    ["25000", "15000", ""], // 22
    ["45000", "20000", ""], // 23
    ["25000", "15000", ""], // 24
    ["85000", "35000", "de diseño"], // 25
    ["30000", "15000", ""], // 26
    ["120000", "45000", ""], // 27
    ["60000", "30000", ""], // 28
    ["45000", "28000", ""], // 29
    ["45000", "28000", ""], // 30
    ["70000", "35000", ""], // 31
    ["110000", "45000", "de diseño"], // 32
    ["25000", "15000", ""], // 33
    ["35000", "15000", ""], // 34
    ["0", "0"], // 35
    ["70000", "35000"], // 36
    ["30000", "15000"], // 37
    ["70000", "30000"], // 38
    ["80000", "25000", "de diseño"], // 39
    ["50000", "35000", "marca hollister"], // 40
    ["35000", "80000"], // 41
    ["0", "0"], // 42
    ["0", "0"], // 43
    ["20000", "40000"], // 44
    ["0", "0"], // 45
    ["0", "0"], // 46
    ["0", "0"], // 47
    ["0", "0"], // 48
    ["0", "0"], // 49
    ["45000", "20000"], // 50
    ["0", "0"], // 51
    ["0", "0"], // 52
    ["0", "0"], // 53
    ["70000", "32000"], // 54
    ["0", "0"], // 55
    ["0", "0"], // 56
    ["0", "0"], // 57
    ["120000", "50000"], // 58
    ["45000", "15000"], // 59
    ["0", "0"], // 60
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
    3:1,
    4:2,
    17:1,
    18:1,
    24:1,
    49:1,
    52:1,
    58:1,
    60:1,
    61:1,
  };

  // Crear las ofertas base
  for (let i = 1; i <= totalImages; i++) {
    const [precio, alquiler, marca] = getPrecio(i); // Obtener precio y alquiler
    ofertasMap.set(i, {
      id: 100 + i,
      title: 'VESTIDO Ofertas',
      categoria: 'simple',
      precio, // Asignar precio
      alquiler, // Asignar alquiler
      marca,
      imageFront: `/Cortos/cortos${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Cortos/cortos${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();