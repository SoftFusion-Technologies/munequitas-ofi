export const ofertas = Array.from({ length: 20 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO Ofertas',
  categoria: 'simple',
  imageFront: `/Ofertas/ofertas${i + 1}.jpg`
}));
