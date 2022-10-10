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

interface ISelectShop {
  selectedShop?: string;
  setSelectedShop: (value: string) => void;
}

const SelectShop: React.FC<ISelectShop> = ({
  selectedShop,
  setSelectedShop
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedShop(event.target.value as string);
  };

  return (
    <>
      <SelectTitle>Select your shop</SelectTitle>
      <FormControl fullWidth sx={{ padding: "10px 24px 10px 11px" }}>
        <Select
          value={selectedShop}
          onChange={handleChange}
        >
          <MenuItem value="Fenoh Store">Fenoh Store</MenuItem>
          { Array(3).fill(0).map((item, index) => (
            <MenuItem value={`Store: ${index + 1}`}>{`Store: ${index + 1}`}</MenuItem>
          )) }
        </Select>
      </FormControl>
    </>
  );
};

export default SelectShop;
