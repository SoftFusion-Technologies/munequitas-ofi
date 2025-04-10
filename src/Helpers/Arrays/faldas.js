/* export const faldas = Array.from({ length: 30    }, (_, i) => ({
  id: 201 + i, // Puedes cambiar el rango de IDs si lo necesitas
  title: 'FALDAS',
  categoria: 'simple',
  precio: 'Faldas amplias $110.000 - Polleras amplias $200.000 - Otras $70.000',
  imageFront: `/Faldas/faldas${i + 1}.jpeg`
})); */

import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';
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

export const faldas = useGaleriaConPrecios('faldas', precios);