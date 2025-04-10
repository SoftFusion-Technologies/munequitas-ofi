/* export const novias = Array.from({ length: 32 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO novias',
  categoria: 'simple',
  precio:
    'Novia con cola $200.000 Venta $400.000',
  
  imageFront: `/Novias/novias${i + 1}.jpeg`
})); */

import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';

const precios = [
  ["100000", "50000", ""],                  // 1
  ["200000", "110000", ""],                 // 2
  ["220000", "110000", ""],                 // 3
  ["300000", "170000", ""],                 // 4
  ["400000", "200000", ""],                 // 5
  ["500000", "250000", ""],                 // 6
  ["300000", "150000", ""],                 // 7
  ["200000", "80000", "Importado"],         // 8
  ["160000", "70000", "De diseño"],         // 9
  ["100000", "50000", "De diseño"],         // 10
  ["160000", "80000", ""],                  // 11
  ["300000", "150000", ""],                 // 12
  ["220000", "110000", ""],                 // 13
  ["160000", "80000", ""],                  // 14
  ["", "40000", "Capa de diseño"],          // 15
  ["500000", "250000", "De diseño"],        // 16
  ["300000", "150000", "De diseño"],        // 17
  ["230000", "110000", "De diseño"],        // 18
  ["400000", "200000", "Importado"],        // 19
  ["230000", "110000", "De diseño"],        // 20
  ["340000", "180000", ""],                 // 21
];



export const novias = useGaleriaConPrecios('novias', precios);