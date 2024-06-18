import Tile from "@/app/components/views/tile";
import React from "react";
import LeadTile from "../lead-tile";
import "./leads.scss";
import Divider from "@/app/components/views/divider";

const Leads = ({ items = [] }) => {
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
          {items.map(({id,...leadInfo}) => (
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
