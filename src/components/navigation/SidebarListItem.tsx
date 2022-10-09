import React, { useState } from "react";
import { Fragment } from "react";
import ChevronUpIcon from "../../assets/ChevronUpIcon";
import ChevronDownIcon from "../../assets/ChevronDownIcon";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemProps,
  styled
} from "@mui/material";

const itemStyle = {
  minWidth: 38
};

interface IListItem extends ListItemProps {
  issubitem?: boolean | number;
  active?: boolean | number
}

const StyledListItem = styled(ListItem)<IListItem>(({ issubitem, active }) => ({
  paddingTop: 4,
  paddingBottom: 4,
  backgroundColor: issubitem ? "#E9F8FE" : active ? "#F7F7F7" : "inherit",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#F7F7F7"
  },
  "& .MuiListItemText-primary": {
    fontSize: 14,
    fontWeight: 400,
    color: active ? "#21B8F9" :"#233B53"
  }
}));

const ordersBadgeStyle = {
    height: 24,
    width: 24,
    backgroundColor: "#00C48C",
    color: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 500
}

interface ISidebarListItem {
  item: {
    title: string;
    icon?: any;
    subItems?: string[];
    badge?: number
  }
}

const SidebarListItem: React.FC<ISidebarListItem> = ({ item }) => {
  const {icon: Icon} = item
  const [open, setOpen] = useState(false);
  const active = item?.title === "Dashboard" // We use React Router and find active route with on the route path

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <StyledListItem onClick={handleOpen} active={active?1:0}>
        <ListItemIcon sx={itemStyle}><Icon color={active ? "#21B8F9": null} /></ListItemIcon>
        <ListItemText primary={item.title} />
        {item.subItems && item.subItems.length !== 0 && (
          <>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</>
        )}
        { item.badge && (
            <p style={ordersBadgeStyle}>{item.badge}</p>
        ) }
      </StyledListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            { item.subItems?.map((subItem: any) => (
                <StyledListItem issubitem={1} sx={{ pl: 7 }} key={subItem}>
                    <ListItemText primary={subItem} />
                </StyledListItem>
            )) }
        </List>
      </Collapse>
      {item.title === "Logout" && <Divider sx={{ margin: "24px 0" }} />}
    </Fragment>
  );
};

export default SidebarListItem;
