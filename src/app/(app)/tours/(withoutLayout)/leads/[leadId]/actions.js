import { mapIncomingLeadData } from "../../../mappers/leads-mapper";

export default async function getLeadInfo(leadId) {
  try {
    const res = await fetch(
      `${process.env.APP_API_GATEWAY}/store/S171799969700017143897175624819348/leads/${leadId}`
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