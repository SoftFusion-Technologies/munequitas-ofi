const images = import.meta.glob('../../../public/Novedades/*.{png,jpg,jpeg,svg}', { eager: true });

export const novedades = Object.keys(images).map((filePath, index) => ({
  id: index + 1,
  imageFront: filePath.replace('../../../public', ''), 
}));