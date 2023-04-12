export function isRatingEmpty(ratingApi: any): boolean {
  if (Array.isArray(ratingApi) && ratingApi.length === 0) return true;
  if (typeof ratingApi === 'object' && Object.keys(ratingApi).length === 0) return true;
  return false;
}
