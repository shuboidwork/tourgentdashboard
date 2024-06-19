"use client";
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AppHeader from "../app-header";
import Icons from "@/app/facts/icon-list";
import Link from "next/link";
import "./left-nav.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const drawerWidth = 240;

const Sidebar = ({ items = [] }) => {
  const pathName = usePathname();
  return (
    <List>
      {items.map(({ id, label, link, icon }) => {
        const ItemIcon = Icons[icon];
        const selected = pathName.startsWith(link);
        return (
          <ListItem
            component={Link}
            href={link}
            key={id}
            style={{ padding: 0 }}
          >
            <ListItemButton className={clsx("li-btn", { selected })}>
              <div className="li-cont">
                <div className="li-icon">
                  <ItemIcon
                    color={selected ? "black" : "gray"}
                    style={{ height: "32px", width: "32px" }}
                  />
                </div>
                <div className={clsx("li-text", { selected })}>{label}</div>
              </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const NavigationMenu = ({ items = [], children }) => {
  return (
    <Grid2 container spacing={0}>
      <CssBaseline />

      <Grid2 xs={12}>
        <AppHeader />
      </Grid2>
      <Grid2 sx={{ width: drawerWidth }}>
        <Drawer variant="permanent" 
         sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxShadow: '4px 4px 12px 0px #BBBBBB40',// --nav-shadow
            overflow: "hidden"
          },
        }}>
          <Toolbar />
          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 0,
              width: drawerWidth,
              overflow: "auto",
            }}
            className="navBar"
          >
            <Sidebar items={items} />
          </Box>
        </Drawer>
      </Grid2>
      <Box sx={{ flexGrow: 1, p: 3 }} className="content-wrapper">
        <Toolbar />
        {children}
      </Box>
    </Grid2>
  );
};
NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.shape({}),
};
export default NavigationMenu;
