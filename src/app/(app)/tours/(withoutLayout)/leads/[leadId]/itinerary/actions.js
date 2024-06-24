"use server";
export default async function saveItin(storeId, data, destinations) {
  const body = {
    destinations: destinations,
    store: storeId,
    data: data,
  };

  try {
    const response = await fetch(
      `${process.env.APP_API_GATEWAY}/itineraries/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body }),
      }
    );
    console.log(response);

    // const result = await response.json();
    // console.log(result);
    // return result;
  } catch (e) {
    throw new Error(e.message);
  }
}
