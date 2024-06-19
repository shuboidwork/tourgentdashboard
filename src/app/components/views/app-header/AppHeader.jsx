"use client";
import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Airlines } from "@mui/icons-material";
import "./app-header.scss";
import Button from "../button";
import { ButtonTypes } from "../button/constants";
import { signOut } from "next-auth/react";

const AppHeader = () => {
  const iconStyles = {
    width: "38px",
    height: "38px",
    filter: "drop-shadow(#939393 2px 3px 2px)",
  };
  return (
    <AppBar position="fixed" className="appbar" elevation={0}>
      <Toolbar>
        <div className="apphd-lgo">
          <Airlines color="secondary" style={iconStyles}></Airlines>
          <div className="apphd-lgo-txt">Tourgent</div>
        </div>
        <Box
          sx={{
            marginLeft: 4,
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: 0,
            width: "100%",
          }}
        >
          {/* <Button
            title="Logout"
            type={ButtonTypes.PRIMARY}
            size="small"
            onClick={() => signOut()}
            sx={{ display: "inline" }}
          ></Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
