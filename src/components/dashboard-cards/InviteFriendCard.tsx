import UsersIcon from "../../assets/UsersIcon";
import CustomLink from "../shared/CustomLink";
import CustomCard from "./CustomCard";

const descriptionStyle = {
  fontSize: 17,
  fontWeight: 500,
  color: "#103B66"
};

const InviteFriendCard = () => {
  return (
    <CustomCard sx={{ height: 231 }} icon={<UsersIcon />} title="Invite friend">
      <p style={descriptionStyle}>
        <span style={{ color: "#00C48C", fontWeight: 700 }}>
          Receive 50 products
        </span>{" "}
        by inviting a friend who subscribes to a plan. Your friend will receive
        a 30% discount coupon valid for any plan.
      </p>
      <CustomLink isArrow>Start inviting friends!</CustomLink>
    </CustomCard>
  );
};

export default InviteFriendCard;
