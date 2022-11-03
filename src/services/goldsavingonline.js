import {postForm, postJson,getData } from './http';


export async function addGSO(item) {
  const formData =new FormData();
  formData.append("branchname",item.branchname)
  formData.append("custname",item.custname)
  formData.append("savingAmt",item.savingAmt)
  formData.append("custid",item.custid)
  formData.append("bankname",item.bankname)
  formData.append("bankid",item.bankid)
  formData.append("img",item.imgslip)
  console.log(formData.get("img"));
  return await postForm('api/GoldSavingOnline/addGso',formData);
}
export async function getGSOData(custid) {
  return await getData('api/GoldSavingOnline/me');}
