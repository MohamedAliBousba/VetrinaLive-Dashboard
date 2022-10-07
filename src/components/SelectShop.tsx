import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled
} from "@mui/material";

const SelectTitle = styled("h5")(() => ({
  marginTop: 60,
  color: "#546679",
  fontSize: 15,
  fontWeight: 500,
  marginLeft: 11
}));

const SelectShop = ({ selectedShop, setSelectedShop }: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedShop(event.target.value as string);
  };

  return (
    <>
      <SelectTitle>Select your shop</SelectTitle>
      <FormControl fullWidth sx={{padding: "10px 24px 10px 11px"}}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedShop}
          onChange={handleChange}
        >
          <MenuItem value="Fenoh Store">Fenoh Store</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectShop;
