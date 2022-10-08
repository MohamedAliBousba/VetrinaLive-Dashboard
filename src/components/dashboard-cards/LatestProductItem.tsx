import { Rating, Stack } from "@mui/material";

const categoryStyle = {
  fontSize: 11,
  fontWeight: 500,
  color: "#21B8F9",
};

const titleStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#103B66"
};

interface ILatestProductItem {
  thumbnail?: string;
  title?: string;
  category?: string;
  rating?: number;
}

const LatestProductItem: React.FC<ILatestProductItem> = ({ thumbnail, title, category, rating }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <img src={thumbnail} alt={title} style={{height: 100, width: 100}}/>
      <Stack spacing={0.5}>
        <p style={{...categoryStyle, textTransform: "uppercase"}}>{category}</p>
        <p style={titleStyle}>{title}</p>
        <Rating name={title} value={rating} readOnly size="small" />
      </Stack>
    </Stack>
  );
};

export default LatestProductItem;
