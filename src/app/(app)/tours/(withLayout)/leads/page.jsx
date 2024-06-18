import React from "react";
import Leads from "../../components/leads/Leads";
import getLeads from "./actions";

export default async function Page() {
  const leads = await getLeads()

  return (
    <>
      <Leads items={leads}/>
    </>
  );
}
