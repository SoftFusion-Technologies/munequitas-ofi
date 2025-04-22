import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';
  // Lista de precios y alquileres en el orden que corresponden a los índices (del 1 al totalImages)
  const precios = [
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"],
    ["0", "0"]
  ];

export const nuevo = useGaleriaConPrecios('nuevo', precios);