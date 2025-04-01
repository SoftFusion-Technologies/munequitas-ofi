export const top = Array.from({ length: 71 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO TOP O FALDA',
  categoria: 'simple',
  precio:
    'Top precio base: $80.000. Top y faldas trabajados $100.000 - Top y falda básicos $70.000 - Venta $160.000',
  descripcion: 'Pueden optar por el top y falda que gusten.',
  imageFront: `/Top/top${i + 1}.jpeg`
}));
