import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(
  (req) => {
    if (!req.url.includes('login') && localStorage.getItem('secure_k')) {
      req.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'secure_k'
      )}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getData(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function postJson(url, body) {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message ?? error.message);
  }
}
export async function postForm(url, formData) {
  const config = { header: { 'content-type': 'multipart/form-data' } };
  return await axios.post(url, formData, config);
}
/**
 * @param {string} baseUrl
 * @param {*} params
 */
export function setParams(baseUrl, params) {
  let s = '?';
  Object.keys(params).forEach((key) => {
    if (!params[key]) return;

    baseUrl += `${s}${key}=${encodeURIComponent(params[key])}`;
    s = '&';
  });

  return baseUrl;
}
