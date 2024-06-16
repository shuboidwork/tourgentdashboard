import React from "react";
import Metrics from "../components/tours-metrics";
import "./tours.scss";

const ToursLayout = ({children}) => {
  return (
    <div className="tours-cont">
      <div className="tours-hdr-tiles">
       <Metrics/>
      </div>
      {children}
    </div>
  );
};

export default ToursLayout;
