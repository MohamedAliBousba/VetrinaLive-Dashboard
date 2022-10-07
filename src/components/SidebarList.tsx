import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import MenuIcon from "../assets/MenuIcon";

const linkStyle = {
  // color: "#fff",
  minWidth: 38
};

const SidebarList = () => {

  return (
    <List
      sx={{
        "&& .Mui-selected, && .Mui-selected:hover": {
          bgcolor: "primary.light",
          "&, & .MuiListItemIcon-root": {
            color: "secondary.main"
          }
        },
      }}
    >
      {linkList.map(link => (
          <ListItem button>
            <ListItemIcon sx={linkStyle}>{link.icon}</ListItemIcon>
            <ListItemText primary={link.title} />
          </ListItem>
      ))}
    </List>
  );
};

const linkList = [
  { title: "Dashboard", icon: <MenuIcon />},
  { title: "Dashboard", icon: <MenuIcon /> },
  { title: "Dashboard", icon: <MenuIcon /> },
  { title: "Dashboard", icon: <MenuIcon /> },
  { title: "Dashboard", icon: <MenuIcon /> }
];

export default SidebarList;
