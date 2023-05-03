import type { UserCookie } from '@/components/Login/LoginComponent/types';
import type { Trail } from '@/models/Trail/types';

export function checkUserInTrail(userCookie: UserCookie | null, trailData: Trail) {
  if (!userCookie) return false;
  return trailData?.users?.some((trailUser) => trailUser?.id === userCookie?.id);
}
