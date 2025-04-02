// Define los precios específicos para ciertos IDs
const priceOverrides = {
  101: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  102: '$35.000',
  117: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  119: '$28.000',
  120: '$28.000',
  121: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  122: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  123: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  124: 'ALQUILER $40.000 - VENTA $80.000 - PRECIO TOPS SUPER TRABAJADOS: $120.000',
  125: '$25.000'
  // Puedes agregar más si es necesario
};

export const tops = Array.from({ length: 50 }, (_, i) => {
  const id = 101 + i;
  return {
    id,
    title: 'tops',
    precio: priceOverrides[id] || '', // Si no hay precio en overrides, se deja vacío
    categoria: 'simple',
    imageFront: `/Tops/tops${i + 1}.jpeg`
  };
});
