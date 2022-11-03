import { getData } from './http';

export async function getCustomerData() {
  return await getData('api/Customer/me');
}
export async function getCustomerRemainData() {
  return await getData('api/Customer/MoneySavingRemain/me');
}