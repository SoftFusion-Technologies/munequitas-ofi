export const cortos = Array.from({ length: 64 }, (_, i) => ({
  id: 201 + i, // Puedes cambiar el rango de IDs si lo necesitas
  title: 'VESTIDO CORTO',
  categoria: 'simple',
  imageFront: `/Cortos/cortos${i + 1}.jpeg`
}));
