"use server"

import { mapIncomingLeadData } from "../../../mappers/leads-mapper";

export default async function getLeadInfo(leadId, storeId) {
  try {
    const res = await fetch(
      `${process.env.APP_API_GATEWAY}/store/${storeId}/leads/${leadId}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response =  await res.json();
    return mapIncomingLeadData(response);
  } catch (e) {
    throw new Error(e);
  }
}
