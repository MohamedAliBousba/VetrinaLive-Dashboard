import {
  Button,
  ButtonProps,
  Menu,
  MenuItem,
  styled
} from "@mui/material";
import React from "react";
import ChevronDownIcon from "../../assets/ChevronDownIcon";
import CustomCard from "./CustomCard";

const StyledButton = styled(Button)<ButtonProps>(() => ({
  textTransform: "none",
  fontSize: 14,
  fontWeight: 400,
  color: "#666666"
}));

const CustomMenuCard = ({children, icon, title, selectedItem, setSelectedItem}: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const chooseItem = (item: string) => {
    setSelectedItem(item);
    handleClose();
  };

  return (
    <CustomCard
      sx={{ height: 220, width: 349 }}
      icon={icon}
      title={title}
      menu={
        <div>
          <StyledButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<ChevronDownIcon color="#666666" />}
          >
            {selectedItem}
          </StyledButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button"
            }}
          >
            {menuList.map(item => (
              <MenuItem
                key={item}
                onClick={() => chooseItem(item)}
                selected={selectedItem === item}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </div>
      }
    >
      {children}
    </CustomCard>
  );
};

const menuList = ["This year", "This month", "This week", "This day"];

export default CustomMenuCard;
