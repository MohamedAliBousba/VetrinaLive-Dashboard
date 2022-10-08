import { Stack } from "@mui/material";
import ExtensionIcon from "../../assets/ExtensionIcon";
import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";

const subCardContainerStyle = {
  height: 150,
  width: 152,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const ExtensionSubCard = ({ children, color, title }: any) => {
  return (
    <div>
      <div style={{ ...subCardContainerStyle, backgroundColor: color }}>
        {children}
      </div>
      <p
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: "#103B66",
          width: 160
        }}
      >
        {title}
      </p>
    </div>
  );
};

const ExtensionsMarketplaceCard = () => {
  return (
    <CustomCard
      sx={{ height: 343, width: 357, overflow: "hidden" }}
      icon={<ExtensionIcon />}
      title="Extensions Marketplace"
    >
      <Stack direction="row" spacing={5}>
        <ExtensionSubCard color="#FFA26B" title="Connect your own domain">
          <img src="/images/domain1.png" alt="" />
        </ExtensionSubCard>
        <ExtensionSubCard color="#00C48C" title="50 Additional Products">
          <p
            style={{
              fontSize: 20,
              fontWeight: 600,
              textAlign: "center",
              color: "#ffffff",
              width: 79
            }}
          >
            <span style={{ fontSize: 30 }}>+50</span> Prodotti
          </p>
        </ExtensionSubCard>
      </Stack>
      <CustomLink isArrow>Discover all extensions</CustomLink>
    </CustomCard>
  );
};

export default ExtensionsMarketplaceCard;
