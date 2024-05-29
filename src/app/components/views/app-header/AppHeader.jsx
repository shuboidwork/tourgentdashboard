import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Airlines } from "@mui/icons-material";
import "./app-header.scss";

const AppHeader = () => {
  const iconStyles = {
    width: "38px",
    height: "38px",
    filter: "drop-shadow(#939393 2px 3px 2px)",
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className="apphd-lgo">
          <Airlines color="secondary" style={iconStyles}></Airlines>
          <div className="apphd-lgo-txt">Tourgent</div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
