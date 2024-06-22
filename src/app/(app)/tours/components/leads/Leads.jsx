'use client'
import Tile from "@/app/components/common/tile";
import React, { useEffect, useState } from "react";
import LeadTile from "../lead-tile";
import "./leads.scss";
import Divider from "@/app/components/common/divider";
import { useStore } from "@/app/components/enhancers/useStore";
import { getLeads } from "../../(withLayout)/leads/actions";

const Leads = () => {
  const { storeId } = useStore();
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const leadsList = storeId ? await getLeads(storeId) : [];
      setLeads(leadsList);
    };
    fetchLeads();
  }, [storeId])
  

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
          {leads.map(({id,...leadInfo}) => (
            <LeadTile key={id} 
              id={id}
              {...leadInfo}
            />
          ))}
        </div>
      </>
    );
  };

  return <Tile content={getLeadsView()} className="leads-cont" />;
};

export default Leads;
