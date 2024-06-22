"use server"

import { mapIncomingLeadData } from "../../mappers/leads-mapper";

export const  getLeads = async (storeId)=>{
  try {
    const res = await fetch(
      `${process.env.APP_API_GATEWAY}/stores/${storeId}/leads/?filters=%7B%7D&page=1&limit=10&pagination=true`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response =  await res.json()
    return response.map((lead) => mapIncomingLeadData(lead));
  } catch (e) {
    throw new Error(e);
  }
}

export const updateFilters = async (formData) => {
};
