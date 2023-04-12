export const convertToArray = (urls: string): string[] => {
  const images = urls.split(',');
  const nonEmptyImages = images.filter((image) => image !== ' ');
  return nonEmptyImages;
};
