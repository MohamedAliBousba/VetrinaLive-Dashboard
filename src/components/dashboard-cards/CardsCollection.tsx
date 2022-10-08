import { Container, Grid } from "@mui/material";
import React from "react";
import ConfigureShopCard from "./ConfigureShopCard";
import CustomerSupportCard from "./CustomerSupportCard";
import ExtensionsMarketplaceCard from "./ExtensionsMarketplaceCard";
import InviteFriendCard from "./InviteFriendCard";
import LatestProductsCard from "./LatestProductsCard";
import OrdersCard from "./OrdersCard";
import PhoneCard from "./PhoneCard";
import TrustpilotCard from "./TrustpilotCard";
import VisitorsCard from "./VisitorsCard";

const CardsCollection = () => {
  return (
    <Container sx={{transform: "translateY(-40px)"}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <VisitorsCard />
        </Grid>
        <Grid item xs={4}>
          <OrdersCard />
        </Grid>
        <Grid item xs={4}>
          <ConfigureShopCard />
        </Grid>
        <Grid item xs={4}>
          <PhoneCard />
        </Grid>
        <Grid item xs={4}>
          <ExtensionsMarketplaceCard />
        </Grid>
        <Grid item xs={4}>
          <TrustpilotCard />
        </Grid>
        <Grid item xs={8}>
          <LatestProductsCard />
        </Grid>
        <Grid item xs={4}>
          <InviteFriendCard />
        </Grid>
        <Grid item xs={4}>
          <CustomerSupportCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardsCollection;
