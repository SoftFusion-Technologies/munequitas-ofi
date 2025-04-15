const images = import.meta.glob('../../../public/Novedades/*.{png,jpg,jpeg,svg,mp4}', { eager: true });

export const novedades = Object.keys(images).map((filePath, index) => {
  const ext = filePath.split('.').pop().toLowerCase();
  const type = ext === 'mp4' ? 'video' : 'image';

  return {
    id: index + 1,
    imageFront: filePath.replace('../../../public', ''),
    type: type,
  };
});
