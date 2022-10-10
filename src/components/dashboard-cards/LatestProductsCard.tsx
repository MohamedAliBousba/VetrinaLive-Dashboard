import { Grid } from "@mui/material";
import CatalogIcon from "../../assets/CatalogIcon";
import { API_ENDPOINT } from "../../config/endpoint";
import useFetch from "../../hooks/useFetch";
import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";
import LatestProductItem from "./LatestProductItem";
import LatestProductsSkeleton from "./LatestProductsSkeleton";

const LatestProductsCard = () => {
  const [loading, data, error] = useFetch(
    `${API_ENDPOINT}/products?limit=8`
  );

  return (
    <CustomCard
      sx={{ height: 550 }}
      icon={<CatalogIcon />}
      title="Latest Products"
      menu={<CustomLink isArrow>Visit our blog</CustomLink>}
    >
    { loading && (
        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <LatestProductsSkeleton />
        </div>
    ) }
    { !loading && data && data.length !== 0 && (
        <Grid container spacing={2}>
          { data.map((product) => (
                <Grid item xs={6} key={product.id}>
                    { product && product?.id && (
                        <LatestProductItem thumbnail={product?.thumbnail} title={product.title} 
                                           category={product.category} rating={product.rating} />
                    ) }
                </Grid>
            ))}
        </Grid>
    ) }
    </CustomCard>
  );
};

export default LatestProductsCard;
