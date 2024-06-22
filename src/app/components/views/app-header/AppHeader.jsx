"use client";
import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Airlines } from "@mui/icons-material";
import "./app-header.scss";
import Select from "../../common/select";
import { useStore } from "../../enhancers/useStore";
import { getStores } from "./actions";
import { redirect } from "next/navigation";
import RouteUrls from "@/app/facts/route-urls";
const iconStyles = {
  width: "38px",
  height: "38px",
  filter: "drop-shadow(#939393 2px 3px 2px)",
};

const AppHeader = () => {
  const [storeList, setStoreList] = useState([]);
  const { storeId, setStoreId } = useStore();;

  useEffect(() => {
    const fetchStores = async () => {
      const stores = await getStores();
      setStoreList(stores);
      if(stores.length) 
         setStoreId(stores[0].value);
    }
    fetchStores();
  }, [setStoreId]);
 
  const onStoreChange = (e) => {
    setStoreId(e.target.value)
  }

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
          <Select
            id={"store"}
            className="sel-store"
            label="Select store"
            options={storeList}
            onChange={onStoreChange}
            value={storeId}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
