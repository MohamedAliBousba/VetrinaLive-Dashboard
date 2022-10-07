import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AdminHeaderList from "./SidebarList";
import { styled, useMediaQuery, Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import SidebarList from "./SidebarList";
import MenuIcon from "../assets/MenuIcon";
import Logo from "../assets/Logo";

const drawerWidth = 240;

const toolbarIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "11px 8px"
};

const StyledDrawer = styled(Drawer)(({ open, theme }) => ({
  "& .MuiDrawer-paper": {
    minHeight: "100vh",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    })
  }
}));

const Sidebar = (props: any) => {
  const { open, setOpen } = props;

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer open={open} variant="permanent">
      <div style={toolbarIconStyle}>
        <Logo />
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </div>
      <Divider />
      <SidebarList />
      <Divider />
    </StyledDrawer>
  );
};

export default Sidebar;
