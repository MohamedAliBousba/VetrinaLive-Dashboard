import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";

const TrustpilotCard = () => {
  return (
    <CustomCard
      sx={{
        height: 232,
        backgroundColor: "#000032"
      }}
      icon={<img src="/images/trustpilot.png" alt="trustpilot" />}
    >
      <p style={{ color: "#ffffff", fontSize: 17, fontWeight: 400 }}>
        Show us your love by leaving a{" "}
        <span style={{ color: "#00C48C" }}>positive</span> review on trust pilot
        and receive the extension of{" "}
        <span style={{ fontWeight: 700 }}>50 additional products</span>
      </p>

      <CustomLink isArrow color="#00C48C" sx={{textDecoration: "underline"}}>
        Write a review on Trustpilot
      </CustomLink>
    </CustomCard>
  );
};

export default TrustpilotCard;
