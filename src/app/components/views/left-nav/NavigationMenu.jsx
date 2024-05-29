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

const drawerWidth = 240;

const NavigationMenu = ({ items = [] }) => {
  const pathName = usePathname();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppHeader />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List style={{ "padding-top": "12px" }}>
            {items.map(({ id, label, link, icon }) => {
              const ItemIcon = Icons[icon];
              const selected = link === pathName;
              return (
                <ListItem
                  component={Link}
                  href={link}
                  key={id}
                  style={{ padding: 0 }}
                >
                  <ListItemButton style={{ padding: "12px 16px" }}>
                    <div className="li-cont">
                      <div className="li-icon">
                        <ItemIcon
                          color={selected ? "black" : "gray"}
                          style={{ height: "32px", width: "32px" }}
                        />
                      </div>
                      <div className={clsx("li-text", { selected })}>
                        {label}
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};
export default NavigationMenu;
