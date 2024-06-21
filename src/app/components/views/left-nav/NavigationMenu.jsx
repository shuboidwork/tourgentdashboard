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
import { getCurrentBreakpoint } from "@/app/utils/util";
import { useTheme } from "@mui/material";

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
  const theme = useTheme()
  const currentBreakpoint = getCurrentBreakpoint(theme);

  //Configure this as per need 
  const getDrawerWidth = () => {
    switch (currentBreakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
      case 'lg':
      case 'xl':
      default:
        return 240; // default width
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader />
      <Drawer
        className="drawer"
        sx={{
          width: getDrawerWidth(),
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: getDrawerWidth(),
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Sidebar items={items} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          overflow: "auto",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.shape({}),
};
export default NavigationMenu;
