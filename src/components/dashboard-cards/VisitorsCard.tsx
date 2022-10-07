import React from "react";
import EyeIcon from "../../assets/EyeIcon";
import CustomLink from "../shared/CustomLink";
import CustomMenuCard from "./CustomMenuCard";

const numberVisitorsStyle = {
    fontSize: 42,
    fontWeight: 500,
    color: "#103B66"
}

const VisitorsCard = () => {
  const [selectedItem, setSelectedItem] = React.useState("This month");

  return (
    <CustomMenuCard
      icon={<EyeIcon />}
      title="Visitors"
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    >
      <p style={numberVisitorsStyle}>1824</p>
      <CustomLink isArrow>Do you want more visits? Contact us!</CustomLink>
    </CustomMenuCard>
  );
};

export default VisitorsCard;
