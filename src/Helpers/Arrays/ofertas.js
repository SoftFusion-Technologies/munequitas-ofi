export const ofertas = (() => {
  const totalImages = 82;
  const ofertasMap = new Map();

  // Lista de precios en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    "15000", // 1
    "25000", // 2
    "22000", // 3
    "15000", // 4
    "40000", // 5
    "30000", // 6
    "18000", // 7
    "25000", // 8
    "30000", // 9
    "30000", // 10
    "25000", // 11
    "30000", // 12
    "12000", // 13
    "18000", // 14
    "9800",  // 15
    "9800",  // 16
    "80000", // 17
    "50000", // 18
    "20000", // 19
    "30000", // 20
    "30000", // 21
    "15000", // 22
    "15000", // 23
    "18000", // 24
    "30000", // 25
    "30000", // 26
    "18000", // 27
    "32000", // 28
    "18000", // 29
    "55000", // 30
    "20000", // 31
    "30000", // 32
    "20000", // 33
    "8000",  // 34
    "35000", // 35
    "20000", // 36
    "30000", // 37
    "30000", // 38
    "40000", // 39
    "25000", // 40
    "60000", // 41
    "38000", // 42
    "29000", // 43
    "43000", // 44
    "38000", // 45
    "18000", // 46
    "18000", // 47
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
    "70000", // 70
    "30000", // 71
    "30000", // 72
    "30000", // 73
    "42000", // 74
    "40000", // 75
    "18000", // 76
    "40000", // 77
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
      return precios[precios.length - 1] || "0"; // Valor por defecto si no hay precios
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