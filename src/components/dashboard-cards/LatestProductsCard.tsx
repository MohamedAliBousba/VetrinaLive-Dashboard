import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import CatalogIcon from "../../assets/CatalogIcon";
import useFetch from "../../hooks/useFetch";
import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";
import LatestProductItem from "./LatestProductItem";

type productType = {
  loading: boolean;
  data: any[];
  error: string;
};

const LatestProductsCard = () => {
  const [loading, data, error] = useFetch(
    "https://dummyjson.com/products?limit=8"
  );

  return (
    <CustomCard
      sx={{
        // width: 729,
        height: 550
      }}
      icon={<CatalogIcon />}
      title="Latest Products"
      menu={<CustomLink isArrow>Visit our blog</CustomLink>}
    >
    { loading && (
        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <CircularProgress />
        </div>
    ) }
    { !loading && data && data.length !== 0 && (
        <Grid container spacing={2}>
          { data.map((product) => (
                <Grid item xs={6} key={product.id}>
                    { product && product?.id && (
                        <LatestProductItem product={product}/>
                    ) }
                </Grid>
            ))}
        </Grid>
    ) }
    </CustomCard>
  );
};

export default LatestProductsCard;
