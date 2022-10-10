import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import SidebarList from "./SidebarList";
import Logo from "../../assets/Logo";
import MenuIcon from "../../assets/MenuIcon";
import { useState } from "react";
import SelectShop from "./SelectShop";

const drawerWidth = 240;

const toolbarIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "11px 8px"
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(6.5),
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ISidebar {
  open?: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebar> = ({ open, setOpen }) => {
  const [selectedShop, setSelectedShop] = useState("Fenoh Store");

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={open} variant="permanent">
      <div style={toolbarIconStyle}>
        <Logo />
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </div>
      <Divider />
      <SidebarList />
      {open && (
        <SelectShop
          selectedShop={selectedShop}
          setSelectedShop={setSelectedShop}
        />
      )}
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
