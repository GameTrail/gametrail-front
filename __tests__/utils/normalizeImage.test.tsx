import { normalizeImage } from '@/utils/normalizeImage';

describe('normalizeImage', () => {
  it('should return the normalized image URL', () => {
    const url = '//images.igdb.com/igdb/image/upload/t_original/co1ycw.jpg';
    const expectedOutput = 'https://images.igdb.com/igdb/image/upload/t_original/co1ycw.jpg';
    expect(normalizeImage(url)).toEqual(expectedOutput);
  });
});
