import { Container, Grid } from "@mui/material";
import ConfigureShopCard from "./ConfigureShopCard";
import CustomerSupportCard from "./CustomerSupportCard";
import ExtensionsMarketplaceCard from "./ExtensionsMarketplaceCard";
import InviteFriendCard from "./InviteFriendCard";
import LatestProductsCard from "./LatestProductsCard";
import OrdersCard from "./OrdersCard";
import PhoneCard from "./PhoneCard";
import TrustpilotCard from "./TrustpilotCard";
import VisitorsCard from "./VisitorsCard";

const leftCards = [
  <VisitorsCard />,
  <OrdersCard />,
  <PhoneCard />,
  <ExtensionsMarketplaceCard />,
  <LatestProductsCard />
];

const rightCards = [
  <ConfigureShopCard />,
  <TrustpilotCard />,
  <InviteFriendCard />,
  <CustomerSupportCard />
];

const LeftCardsCollection = () => {
  return (
    <Grid container spacing={2}>
      {leftCards.map((card, index) => (
        <Grid item xs={index === 4 ? 12 : 6} key={index}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
};

const RightCardsCollection = () => {
  return (
    <Grid container spacing={2}>
      {rightCards.map((card, index) => (
        <Grid item xs={12} key={index}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
};

const CardsCollection = () => {
  return (
    <Container sx={{ transform: "translateY(-40px)" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <LeftCardsCollection />
        </Grid>
        <Grid item xs={12} lg={4}>
          <RightCardsCollection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardsCollection;
