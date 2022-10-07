import ListItem from "@mui/material/ListItem";
import { List, styled } from "@mui/material";
import HomeIcon from "../../assets/HomeIcon";
import CatalogIcon from "../../assets/CatalogIcon";
import OrdersIcon from "../../assets/OrdersIcon";
import CustomerIcon from "../../assets/CustomerIcon";
import MarketingIcon from "../../assets/MarketingIcon";
import DeliveryIcon from "../../assets/DeliveryIcon";
import PaymentIcon from "../../assets/PaymentIcon";
import BrushIcon from "../../assets/BrushIcon";
import CreditCardIcon from "../../assets/CreditCardIcon";
import IntegrationIcon from "../../assets/IntegrationIcon";
import ExtensionIcon from "../../assets/ExtensionIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import HelpIcon from "../../assets/HelpIcon";
import ShareIcon from "../../assets/ShareIcon";
import EyeIcon from "../../assets/EyeIcon";
import SidebarListItem from "./SidebarListItem";

const SidebarList = () => {
  return (
    <List>
      {listItems.map(item => (
        <SidebarListItem key={item.title} item={item} />
      ))}
    </List>
  );
};

const listItems = [
  { title: "Dashboard", icon: <HomeIcon /> },
  {
    title: "Catalogue",
    icon: <CatalogIcon />,
    subItems: ["Item 1", "Item 2", "Item 3"]
  },
  { title: "Orders", icon: <OrdersIcon />, badge: 14 },
  { title: "Customers", icon: <CustomerIcon /> },
  {
    title: "Marketing",
    icon: <MarketingIcon />,
    subItems: [
      "Discount codes",
      "Exit intent",
      "Checkout Features",
      "Post-purchase conversion",
      "Cart abandonment",
      "Timer checkout",
      "Sell on Social",
      "Special Offer",
      "Seasonal Offer"
    ]
  },
  { title: "Delivery Options", icon: <DeliveryIcon /> },
  { title: "Payment Options", icon: <PaymentIcon /> },
  { title: "Store Design", icon: <BrushIcon /> },
  { title: "Subscription", icon: <CreditCardIcon /> },
  { title: "Integrations", icon: <IntegrationIcon /> },
  { title: "Extensions", icon: <ExtensionIcon /> },
  { title: "Settings", icon: <SettingsIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
  { title: "Customer Support", icon: <HelpIcon /> },
  { title: "Share your shop", icon: <ShareIcon /> },
  { title: "View your shop", icon: <EyeIcon /> }
];

export default SidebarList;
