export const ofertas = (() => {
  const totalImages = 82;
  const ofertasMap = new Map();

  // Lista de precios en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    "0", // 1
    "0", // 2
    "0", // 3
    "0", // 4
    "0", // 5
    "0", // 6
    "0", // 7
    "0", // 8
    "0", // 9
    "0", // 10
    "0", // 11
    "0", // 12
    "0", // 13
    "0", // 14
    "0", // 15
    "0", // 16
    "0", // 17
    "0", // 18
    "0", // 19
    "0", // 20
    "0", // 21
    "0", // 22
    "0", // 23
    "0", // 24
    "0", // 25
    "0", // 26
    "0", // 27
    "0", // 28
    "0", // 29
    "0", // 30
    "0", // 31
    "0", // 32
    "0", // 33
    "0", // 34
    "0", // 35
    "0", // 36
    "0", // 37
    "0", // 38
    "0", // 39
    "0", // 40
    "0", // 41
    "0", // 42
    "0", // 43
    "0", // 44
    "0", // 45
    "0", // 46
    "0", // 47
    "25000", // 48
    "15000", // 49
    "20000", // 50
    "25000", // 51
    "30000", // 52
    "15000", // 53
    "25000", // 54
    "30000", // 55
    "15000", // 56
    "28000", // 57
    "30000", // 58
    "30000", // 59
    "20000", // 60
    "12000", // 61
    "28000", // 62
    "70000", // 63
    "12000", // 64
    "30000", // 65
    "15000", // 66
    "18000", // 67
    "15000", // 68
    "30000", // 69
    "0", // 70
    "0", // 71
    "0", // 72
    "0", // 73
    "42000", // 74
    "40000", // 75
    "18000", // 76
    "0", // 77
    "15000", // 78
    "18000", // 79
    "30000", // 80
    "30000", // 81
    "12000", // 82
  ];
  
  
  // Función para obtener el precio según el índice
  const getPrecio = (index) => {
    // Si hay menos precios que índices, se usa el último precio disponible
    if (index <= precios.length) {
      return precios[index - 1];
    } else {
      return precios[precios.length - 1] || "12000"; // Valor por defecto si no hay precios
    }
  };

  // Solo estos índices tienen imágenes adicionales. Formato: posición: cantidad de imágenes adicionales
  const hasVariantsMap = {
    1: 2,
    5: 1,
    33: 1,
    40: 1,
    53: 1,
    64: 1,
    63: 1,
    75: 2,
    77: 2,
    76: 1,
    // Agregá más si querés
  };

  // Crear las ofertas base
  for (let i = 1; i <= totalImages; i++) {
    ofertasMap.set(i, {
      id: 100 + i,
      title: 'VESTIDO Ofertas',
      categoria: 'simple',
      precio: getPrecio(i), // Asignar precio según el índice
      imageFront: `/Ofertas/ofertas${i}.jpeg`,
      images: [] // se rellena si corresponde
    });
  }

  // Asignar imágenes adicionales solo donde se especifica
  for (let i = 1; i <= totalImages; i++) {
    if (hasVariantsMap[i]) {
      const cantidad = hasVariantsMap[i];
      for (let variantIndex = 1; variantIndex <= cantidad; variantIndex++) {
        ofertasMap.get(i).images.push(`/Ofertas/ofertas${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})();