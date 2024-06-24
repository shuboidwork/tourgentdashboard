"use client";
import Tile from "@/app/components/common/tile";
import React, { useEffect, useState } from "react";
import LeadTile from "../lead-tile";
import "./leads.scss";
import Divider from "@/app/components/common/divider";
import { useStore } from "@/app/components/enhancers/useStore";
import { getLeads } from "../../(withLayout)/leads/actions";
import EmptyView from "@/app/components/common/empty-view";

const Leads = () => {
  const { storeId } = useStore();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const leadsList = storeId ? await getLeads(storeId) : [];
      setLeads(leadsList);
    };
    fetchLeads();
  }, [storeId]);

  const getLeadsView = () => {
    // TODO: Add filters
    return (
      <>
        <div className="leads-header">
          <div className="leads-hd-title"> New Leads </div>
          <div className="leads-hd-opts">
            {/* <div>Filter</div>
        <div>Sort</div> */}
          </div>
        </div>
        <Divider />
        <div className="leads-list">
          {leads.length ? (
            leads.map(({ id, ...leadInfo }) => (
              <LeadTile key={id} id={id} {...leadInfo} />
            ))
          ) : (
            <EmptyView
              text="No Leads Available"
              supportingText="No leads found for this store. Try modifying your search and filters."
            />
          )}
        </div>
      </>
    );
  };

  return <Tile content={getLeadsView()} className="leads-cont" />;
};

export default Leads;
