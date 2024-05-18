import axios from "axios"
import { getBaseUrl } from "./endpoint"


const saveInvoice=async(data)=>
{
   
    const reponse=await axios.post(`${getBaseUrl()}admin/invoice`,data).then((data)=>data).catch(error=>error);
    return reponse;
}

const updateInvoice=async(id,data)=>
{
    const reponse=await axios.put(`${getBaseUrl()}admin/invoice/${id}`,data).then((data)=>data).catch(error=>error.response);
    return reponse.data;
}



const getinvoiceData =async(a)=>{
    const reponse=await axios.get(`${getBaseUrl()}admin/invoice/${a}`).then((data)=>data).catch(error=>error.response);
    return await reponse.data;
}


const getNextId =async(a)=>{
    const reponse=await axios.get(`${getBaseUrl()}admin/invoice/nextid`).then((data)=>data).catch(error=>error);
    return reponse;
}



const getInvoiceList =async(a)=>{
    const reponse=await axios.get(`${getBaseUrl()}admin/invoice/list`);
    let data=await reponse.data;
    return data;
}



const deleteInvoiceData =async(a)=>{
    const reponse=await axios.delete(`${getBaseUrl()}admin/invoice/${a}`).then((data)=>data).catch(error=>error);
    return reponse;
}


export const validateLogin=async(a)=>{
    const response=await axios.post(`${getBaseUrl()}admin/credentials`,a).catch(error=>error);
    const data=await response.data;
    console.log(data);
    return data;
}

export {saveInvoice,getinvoiceData,getNextId,getInvoiceList,updateInvoice,deleteInvoiceData}