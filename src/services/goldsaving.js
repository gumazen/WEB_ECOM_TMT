import { getData } from './http';

export async function getGoldSavingData() {
  return await getData('api/GoldSaving/me');
}
