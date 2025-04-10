export const useGaleriaConPrecios = (nombreBase, precios) => {
  const allImages = {
    xxl: import.meta.glob("../../../public/XXL/xxl*.{jpg,jpeg}", { eager: true }),
    nenas: import.meta.glob("../../../public/Nenas/nenas*.{jpg,jpeg}", { eager: true }),
    quince: import.meta.glob("../../../public/Quince/quince*.{jpg,jpeg}", { eager: true }),
    novias: import.meta.glob("../../../public/Novias/novias*.{jpg,jpeg}", { eager: true }),
    ofertas: import.meta.glob("../../../public/Ofertas/ofertas*.{jpg,jpeg}", { eager: true }),
    cortos: import.meta.glob("../../../public/Cortos/cortos*.{jpg,jpeg}", { eager: true }),
    largos: import.meta.glob("../../../public/Largos/largos*.{jpg,jpeg}", { eager: true }),
    top: import.meta.glob("../../../public/Top/top*.{jpg,jpeg}", { eager: true }),
    tops: import.meta.glob("../../../public/Tops/Tops*.{jpg,jpeg}", { eager: true }),
    faldas: import.meta.glob("../../../public/Faldas/faldas*.{jpg,jpeg}", { eager: true }),
  };
  
    const images = allImages[nombreBase];
    const ofertasMap = new Map();
  
    const sortedEntries = Object.entries(images).sort(([pathA], [pathB]) => {
      const getNumber = (str) => {
        const match = str.match(new RegExp(`${nombreBase}(\\d+)(?:_(\\d+))?`));
        if (!match) return 0;
        const main = parseInt(match[1], 10);
        const variant = match[2] ? parseInt(match[2], 10) : -1;
        return main * 100 + variant;
      };
      return getNumber(pathA) - getNumber(pathB);
    });
  
    for (const [path] of sortedEntries) {
      const match = path.match(
        new RegExp(`${nombreBase}(\\d+)(?:_(\\d+))?\\.(jpg|jpeg)$`)
      );
      if (!match) continue;
  
      const baseIndex = parseInt(match[1], 10);
      const variantIndex = match[2] ? parseInt(match[2], 10) : null;
  
      if (!ofertasMap.has(baseIndex)) {
        const [precio, alquiler, marca, descripcion] = precios[baseIndex - 1] || ["0", "0", ""];
        ofertasMap.set(baseIndex, {
          id: 100 + baseIndex,
          title: "VESTIDO Ofertas",
          categoria: "simple",
          precio,
          alquiler,
          marca,
          descripcion,
          imageFront: images[path].default, 
          images: [],
        });
      }
  
      if (variantIndex !== null) {
        ofertasMap.get(baseIndex).images.push(images[path].default);
      }
    }
  
    return Array.from(ofertasMap.values());
  };
  