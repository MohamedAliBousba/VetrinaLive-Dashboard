import React from "react";
import OrdersIcon from "../../assets/OrdersIcon";
import CustomLink from "../shared/CustomLink";
import CustomMenuCard from "./CustomMenuCard";

const detailsTitle = {
    color: "#6C7C8C",
    fontSize: 17,
    fontWeight: 400
}

const detailsValue = {
    color: "#103B66",
    fontSize: 17,
    fontWeight: 500
}

const detailsContainer = {
    display: "flex",
    justifyContent: "space-between"
}

const OrdersCard = () => {
  const [selectedItem, setSelectedItem] = React.useState("This month");

  return (
    <CustomMenuCard
      icon={<OrdersIcon />}
      title="Orders"
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    >
      <div style={detailsContainer}>
        <p style={detailsTitle}>Orders received</p>
        <p style={detailsValue}>156</p>
      </div>
      <div style={detailsContainer}>
        <p style={detailsTitle}>Earnings</p>
        <p style={detailsValue}>€ 1893,24</p>
      </div>
      <CustomLink>10 free tips to increase your sales</CustomLink>
    </CustomMenuCard>
  );
};

export default OrdersCard;
