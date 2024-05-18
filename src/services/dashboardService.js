import axios from "axios"
import { getBaseUrl } from "./endpoint"


export const getKapi=async()=>{

    const response=await axios.get(`${getBaseUrl()}admin/invoice/kpi`)
    const data=await response.data;
    return data;
}

export const getPercentage=async()=>{

    const response=await axios.get(`${getBaseUrl()}admin/percentage`)
    const data=await response.data;
    return data;
}


export const getMonthlyTargets=async()=>{

    const response=await axios.get(`${getBaseUrl()}admin/monthlyTarget`)
    const data=await response.data.data;
    return data;
}