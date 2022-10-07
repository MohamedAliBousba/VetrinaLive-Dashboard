import React, { useState } from "react";
import { Fragment } from "react";
import ChevronUpIcon from "../assets/ChevronUpIcon";
import ChevronDownIcon from "../assets/ChevronDownIcon";
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
  issubitem?: boolean;
}

const StyledListItem = styled(ListItem)<IListItem>(({ issubitem }) => ({
  paddingTop: 4,
  paddingBottom: 4,
  backgroundColor: issubitem ? "#E9F8FE" : "inherit",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#F7F7F7"
  },
  "& .MuiListItemText-primary": {
    fontSize: 14,
    fontWeight: 400,
    color: "#233B53"
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

const SidebarListItem = ({ item }: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment key={item.title}>
      <StyledListItem onClick={handleOpen}>
        <ListItemIcon sx={itemStyle}>{item.icon}</ListItemIcon>
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
                <StyledListItem issubitem sx={{ pl: 7 }}>
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
