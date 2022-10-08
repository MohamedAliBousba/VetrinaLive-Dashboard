import { Paper } from "@mui/material";
import CustomLink from "../shared/CustomLink";

const sectionStyle = {
  backgroundColor: "#F3A35C",
  borderRadius: "10px",
  height: 343,
  weight: 348,
  padding: "32px 23px"
};

const flexStyle = {
  display: "flex",
  justifyContent: "space-between"
};

const titleStyle = {
  fontSize: 22,
  fontWeight: 500,
  color: "#ffffff",
  marginBottom: 13,
  width: 162
};

const PhoneCard = () => {
  return (
    <Paper elevation={2} style={sectionStyle}>
      <div style={flexStyle}>
        <div>
          <h3 style={titleStyle}>
            Sell your products on your exclusive APP published on the stores
          </h3>
          <CustomLink
            isArrow
            color="#ffffff"
            sx={{ textDecoration: "underline" }}
          >
            Show more
          </CustomLink>
        </div>
        <img src="/images/iphone.png" alt="phone" />
      </div>
      <div style={{...flexStyle, marginTop: 24}}>
        <img src="/images/googlePlay.png" alt="phone" />
        <img src="/images/appStore.png" alt="phone" />
      </div>
    </Paper>
  );
};

export default PhoneCard;
