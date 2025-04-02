export const faldas = Array.from({ length: 30    }, (_, i) => ({
  id: 201 + i, // Puedes cambiar el rango de IDs si lo necesitas
  title: 'FALDAS',
  categoria: 'simple',
  precio: 'Faldas amplias $110.000 - Polleras amplias $200.000 - Otras $70.000',
  imageFront: `/Faldas/faldas${i + 1}.jpeg`
}));
