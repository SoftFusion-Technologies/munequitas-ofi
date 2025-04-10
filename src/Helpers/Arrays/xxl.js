/* export const xxl = Array.from({ length: 20 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO XXL',
  categoria: 'simple',
  precio: 'XXL LARGOS $70.000',
  precio2: 'XXL CORTOS $45.000',
  imageFront: `/XXL/xxl${i + 1}.jpg`
}));
 */
import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';

const precios = [
  ["160000", "80000"],
  ["140000", "70000"],
  ["180000", "90000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["150000", "75000"],
  ["200000", "100000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
  ["140000", "70000"],
];

export const xxl = useGaleriaConPrecios('xxl', precios);