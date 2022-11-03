import { getData } from './http';

export async function getSettingdata(url) {
  return await getData(url);
}
