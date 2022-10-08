import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
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
      width: theme.spacing(6.5)
    })
  }
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
    <StyledDrawer open={open} variant="permanent">
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
    </StyledDrawer>
  );
};

export default Sidebar;
