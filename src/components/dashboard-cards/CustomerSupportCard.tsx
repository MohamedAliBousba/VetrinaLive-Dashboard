import { Avatar, Button, Stack, styled } from "@mui/material";
import React from "react";
import HeadphonesIcon from "../../assets/HeadphonesIcon";
import CustomCard from "./CustomCard";

const descriptionStyle = {
    fontSize: 15,
    fontWeight: 400,
    color: "#103B66"
}

const StyledButton = styled(Button)(() => ({
    textTransform: "none",
    width: 168,
    height: 50,
    backgroundColor: "#21B8F9"
}))

const CustomerSupportCard = () => {
  return (
    <CustomCard
      sx={{ height: 197, width: 349 }}
      title="Customer support"
      icon={<HeadphonesIcon />}
    >
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src="/images/avatar1.png" alt=""/>
            <p style={descriptionStyle}>Simone is here to help you.</p>
        </Stack>
        <StyledButton variant="contained">Contact us</StyledButton>
    </CustomCard>
  );
};

export default CustomerSupportCard;
