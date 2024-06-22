"use server"

import { mapIncomingStoreData } from "./store-info-mapper";


export const getStores = async () => {
    try {
    const res = await fetch(`${process.env.APP_API_GATEWAY}/stores`);
    if (!res.ok) {
      throw new Error("Failed to fetch stores");
    }
    const response = await res.json();

    return response.map((store) =>  mapIncomingStoreData(store));
  } catch (e) {
    throw new Error(e);
  }
}