/* export const top = Array.from({ length: 69 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO TOP O FALDA',
  categoria: 'simple',
  precio:
    'Top más economicos: $85.000. Top y faldas trabajados $100.000 - Top y falda básicos $70.000 - Venta $160.000',
  descripcion: 'Pueden optar por el top y falda que gusten.',
  imageFront: `/Top/top${i + 1}.jpeg`
}));
 */

import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';
const precios = [
  ["130000", "65000", ""], // 1
  ["150000", "70000", "importado"], // 2
  ["130000", "55000", ""], // 3
  ["100000", "50000", ""], // 4
  ["80000", "40000", "de diseño"], // 5
  ["120000", "60000", "importado"], // 6
  ["120000", "50000", "de diseño", "pollera talle xxl"], // 7
  ["120000", "50000", "de diseño"], // 8
  ["120000", "50000", "importado"], // 9
  ["150000", "60000", "importado"], // 10
  ["80000", "40000", ""], // 11
  ["150000", "60000", "importado"], // 12
  ["90000", "45000", ""], // 13
  ["80000", "35000", ""], // 14
  ["170000", "70000", "importado"], // 15
  ["80000", "40000", ""], // 16
  ["120000", "50000", ""], // 17
  ["120000", "45000", ""], // 18
  ["150000", "60000", ""], // 19
  ["180000", "65000", "importado"], // 20
  ["100000", "50000", ""], // 21
  ["150000", "60000", "de diseño", "Alta costura"], // 22
  ["150000", "65000", "importado"], // 23
  ["120000", "50000", "importado"], // 24
  ["130000", "55000", "de diseño", "Alta costura"], // 25
  ["120000", "60000", "de diseño"], // 26
  ["120000", "60000", ""], // 27
  ["130000", "55000", "importado"], // 28
  ["140000", "55000", "importado"], // 29
  ["140000", "55000", "importado"], // 30
  ["90000", "45000", ""], // 31
  ["150000", "65000", "de diseño", "Alta costura"], // 32
  ["150000", "65000", "de diseño"], // 33
  ["130000", "45000", "importado"], // 34
  ["120000", "43000", ""], // 35
  ["220000", "90000", "de diseño", "Alta costura"], // 36
  ["90000", "40000", "importado"], // 37
  ["140000", "60000", "de diseño", "Alta costura"], // 38
  ["150000", "65000", ""], // 39
  ["220000", "110000", ""], // 40
  ["160000", "80000", "importado"], // 41
  ["80000", "35000", "importado"], // 42
  ["", "40000", ""], // 43 // No va
  ["150000", "60000", "importado"], // 44
  ["100000", "45000", "importado"], // 45
  ["150000", "55000", "", "Alta costura"], // 46
  ["130000", "55000", "de diseño"], // 47
  ["85000", "40000", "importado"], // 48
  ["100000", "50000", "de diseño"], // 49
  ["150000", "63000", "importado"], // 50
  ["300000", "150000", "importado"], // 51
  ["120000", "55000", ""], // 52
];

export const top = useGaleriaConPrecios('top', precios);