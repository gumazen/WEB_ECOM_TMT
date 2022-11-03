import jwtDecode from 'jwt-decode';

import { postJson } from './http';

const tokenKey = 'secure_k';
const custIdKey = 'cid';

export async function authenticate(custid, password) {
  try {
    const { name, token } = await postJson('api/login', {
      custid,
      password,
    });

    localStorage.setItem(tokenKey, token);
    localStorage.setItem(custIdKey, name);

    return { custid: name, token };
  } catch (error) {
    throw error;
  }
}

export const isLoggedIn = () => {
  const token = localStorage.getItem(tokenKey);
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);

    return Date.now() < exp * 1000;
  } catch (error) {
    return false;
  }
};

export const getAuthData = () => ({
  token: localStorage.getItem(tokenKey),
  custid: localStorage.getItem(custIdKey),
});
