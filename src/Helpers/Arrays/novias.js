export const novias = Array.from({ length: 32 }, (_, i) => ({
  id: 101 + i,
  title: 'VESTIDO novias',
  categoria: 'simple',
  precio:
    'Novia con cola $200.000 Venta $400.000',
  
  imageFront: `/Novias/novias${i + 1}.jpeg`
}));
