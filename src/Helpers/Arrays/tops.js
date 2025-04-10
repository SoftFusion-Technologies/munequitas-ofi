/* // Define los precios específicos para ciertos IDs
const priceOverrides = {
  101: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  102: '$35.000',
  117: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  119: '$28.000',
  120: '$28.000',
  121: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  122: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  123: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  124: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  125: '$25.000'
  // Puedes agregar más si es necesario
};

export const tops = Array.from({ length: 50 }, (_, i) => {
  const id = 101 + i;
  return {
    id,
    title: 'tops',
    precio: priceOverrides[id] || '', // Si no hay precio en overrides, se deja vacío
    categoria: 'simple',
    imageFront: `/Tops/tops${i + 1}.jpeg`
  };
});
 */
export const tops = (() => {
  const totalImages = 48;
  const ofertasMap = new Map();

  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["80000", "40000"], // 1
    ["50000", "35000"], // 2
    ["80000", "40000"], // 3
    ["80000", "40000"], // 4
    ["60000", "30000"], // 5
    ["70000", "35000"], // 6
    ["60000", "30000"], // 7
    ["60000", "30000"], // 8
    ["70000", "35000"], // 9
    ["60000", "30000"], // 10
    ["50000", "25000"], // 11
    ["90000", "45000"], // 12
    ["70000", "35000"], // 13
    ["90000", "45000"], // 14
    ["100000", "50000"], // 15
    ["100000", "50000"], // 16
    ["80000", "40000"], // 17
    ["40000", "20000"], // 18
    ["0", "28000"],      // 19
    ["0", "28000"],      // 20
    ["70000", "35000"], // 21
    ["70000", "35000"], // 22
    ["80000", "40000"], // 23
    ["80000", "40000"], // 24
    ["50000", "25000"], // 25
    ["100000", "50000"], // 26
    ["100000", "50000"], // 27
    ["40000", "20000"], // 28
    ["50000", "25000"], // 29
    ["50000", "25000"], // 30
    ["80000", "40000"], // 31
    ["50000", "25000"], // 32
    ["50000", "25000"], // 33
    ["70000", "35000"], // 34
    ["70000", "35000"], // 35
    ["50000", "25000"], // 36
    ["110000", "55000"], // 37
    ["50000", "25000"], // 38
    ["60000", "30000"], // 39
    ["40000", "20000"], // 40
    ["50000", "25000"], // 41
    ["50000", "25000"], // 42
    ["90000", "45000"], // 43
    ["80000", "40000"], // 44
    ["60000", "30000"], // 45
    ["80000", "40000"], // 46
    ["50000", "25000"], // 47
    ["80000", "40000"], // 48
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
      imageFront: `/Tops/tops${i}.jpeg`,
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