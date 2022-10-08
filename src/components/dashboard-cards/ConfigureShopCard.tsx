import React from "react";
import ToolIcon from "../../assets/ToolIcon";
import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";

const descriptionStyle = {
    fontSize: 17,
    fontWeight: 400,
    color: "#103B66"
}

const ConfigureShopCard = () => {
  return (
    <CustomCard
      sx={{
        height: 289,
        // width: 350
      }}
      icon={<ToolIcon />}
      title="Configure your shop"
    >
      <div style={{color: "#FFA26B", fontWeight: 500}}>
           <span style={{fontSize: 30}}>45%</span> <br/> Completed
      </div>
      <p style={descriptionStyle}>Complete all the steps to have a complete shop to best present to your customers.</p>
      <CustomLink isArrow>Complete the setup!</CustomLink>
    </CustomCard>
  );
};

export default ConfigureShopCard;
