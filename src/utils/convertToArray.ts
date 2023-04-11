export const convertToArray = (urls: string): string[] => {
  const images = urls.split(',');
  const nonEmptyImages = images.filter((image) => image !== ' ');
  const res = nonEmptyImages.map((image) => image.trim());
  return res;
};
