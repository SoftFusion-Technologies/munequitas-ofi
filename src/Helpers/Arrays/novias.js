/* export const novias = Array.from({ length: 32 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO novias',
  categoria: 'simple',
  precio:
    'Novia con cola $200.000 Venta $400.000',
  
  imageFront: `/Novias/novias${i + 1}.jpeg`
})); */
/* export const novias = (() => {
  const totalImages = 23;
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
    5:1,
    6:1,
    7:1,
    13:1,
    14:1,
    18:2,
    19:1,
    22:1,
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
        ofertasMap.get(i).images.push(`/Novias/novias${i}_${variantIndex}.jpeg`);
      }
    } else {
      ofertasMap.get(i).images = undefined;
    }
  }

  return Array.from(ofertasMap.values());
})(); */

// novias.js

// 1. Cargar todas las imágenes .jpeg 
/* const images = import.meta.glob('/public/Novias/novias*.jpeg', { eager: true });

// Precios indexados con comentarios
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
];

const ofertasMap = new Map();

// 🔽 Convertimos el objeto a array y ordenamos por número
const sortedEntries = Object.entries(images).sort(([pathA], [pathB]) => {
  const getNumber = (str) => {
    const match = str.match(/novias(\d+)(?:_(\d+))?/);
    if (!match) return 0;
    const main = parseInt(match[1], 10);
    const variant = match[2] ? parseInt(match[2], 10) : -1;
    return main * 100 + variant; // asegura que 4 < 4_1 < 4_2 < 5
  };
  return getNumber(pathA) - getNumber(pathB);
});

for (const [path] of sortedEntries) {
  const match = path.match(/novias(\d+)(?:_(\d+))?\.jpeg$/);
  if (!match) continue;

  const baseIndex = parseInt(match[1], 10);
  const variantIndex = match[2] ? parseInt(match[2], 10) : null;

  if (!ofertasMap.has(baseIndex)) {
    const [precio, alquiler] = precios[baseIndex - 1] || ["0", "0"];

    ofertasMap.set(baseIndex, {
      id: 100 + baseIndex,
      title: "VESTIDO Ofertas",
      categoria: "simple",
      precio,
      alquiler,
      imageFront: `/Novias/novias${baseIndex}.jpeg`,
      images: [],
    });
  }

  if (variantIndex !== null) {
    ofertasMap.get(baseIndex).images.push(`/Novias/novias${baseIndex}_${variantIndex}.jpeg`);
  }
}

export const novias = Array.from(ofertasMap.values()); */

import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';

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
];


export const novias = useGaleriaConPrecios('novias', precios);