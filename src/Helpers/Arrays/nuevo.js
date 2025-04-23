import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';
  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["1500", "0"],        // 1 
    ["3000", "0"],        // 2
    ["2800", "0"],        // 4 
    ["15000", "0", "Marca zara"],    // 5 
    ["15000", "0", "Marca zara"],    // 6 
    ["2900", "0"],        // 7 
    ["15000", "0", "Marca zara"],     // 8 
  ];

export const nuevo = useGaleriaConPrecios('nuevo', precios);