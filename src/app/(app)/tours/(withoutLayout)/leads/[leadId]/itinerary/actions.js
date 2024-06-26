"use server";

import { mapIncomingItinerary } from "@/app/(app)/tours/mappers/itinerary-mapper";

export async function saveItin(itineraryId, storeId, data, destinations) {
    if (itineraryId) {
      return await updateItinerary(itineraryId, data);
    } else {
      return await saveItinerary(storeId, data, destinations);
    }
  }
  
  export async function setItineraryIdForLead(storeId, leadId, itinId) {
      const body = {
          "itinerary": itinId
      }
      const url = `${process.env.APP_API_GATEWAY}/store/${storeId}/leads/${leadId}`;
      const options = {
        method: "PATCH",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      return await executeAndHandleErrors(url, options);
  }

  export default async function getItineraryInfo(itinId) {
    try {
      const res = await fetch(
        `${process.env.APP_API_GATEWAY}/itineraries/${itinId}/`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch Itinerary data");
      }
      const response =  await res.json();
      return mapIncomingItinerary(response);
    } catch (e) {
      throw new Error(e);
    }
  }
  

const executeAndHandleErrors = async (url, options) => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error! status: ${response.status}, message: ${errorText}`);
      throw new Error(
        `Error! status: ${response.status}, message: ${errorText}`
      );
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return await response.json();
    } else {
      const errorText = await response.text();
      console.error(`Error! status: ${response.status}, message: ${errorText}`);
      throw new Error(
        `Error! status: ${response.status}, message: ${errorText}`
      );
    }
  } catch (error) {
    console.error("Error!", error);
  }
};

const updateItinerary = async (itineraryId, data) => {
  const body = {
    data: data,
  };

  const url = `${process.env.APP_API_GATEWAY}/itineraries/${itineraryId}/`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return await executeAndHandleErrors(url, options);
};

const saveItinerary = async (storeId, data, destinations) => {
  const body = {
    destinations: destinations,
    store: storeId,
    data: data,
  };

  const url = `${process.env.APP_API_GATEWAY}/itineraries/`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await executeAndHandleErrors(url, options);
  return mapIncomingItinerary(response);
};

