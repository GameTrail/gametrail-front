import Cookies from 'js-cookie';
import type { UserCookie } from '@/components/Login/LoginComponent/types';

export const getUserCookie = (): UserCookie | null => {
  const userCookie = Cookies.get('user');
  if (!userCookie) return null;
  const userObject = userCookie ? JSON.parse(userCookie) : null;
  return userObject;
};

export const setCookie = (cookie: string, value: UserCookie, expires?: number) => {
  Cookies.set(cookie, JSON.stringify(value), { expires });
};
