import { Container, Grid } from "@mui/material";
import React from "react";
import OrdersCard from "./OrdersCard";
import VisitorsCard from "./VisitorsCard";

const CardsCollection = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <VisitorsCard />
        </Grid>
        <Grid item xs={4}>
          <OrdersCard />
        </Grid>
        <Grid item xs={4}>
          Item
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardsCollection;
