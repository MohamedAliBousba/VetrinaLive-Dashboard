import { Rating, Stack } from "@mui/material";
import React from "react";

const categoryStyle = {
  fontSize: 11,
  fontWeight: 500,
  color: "#21B8F9"
};

const titleStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#103B66"
};

const LatestProductItem = ({ product }: any) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <img src={product.thumbnail} alt={product.title} style={{height: 100, width: 100}}/>
      <Stack spacing={0.5}>
        <p style={categoryStyle}>{product.category}</p>
        <p style={titleStyle}>{product.title}</p>
        <Rating name={product.title} value={product.rating} readOnly size="small" />
      </Stack>
    </Stack>
  );
};

export default LatestProductItem;
