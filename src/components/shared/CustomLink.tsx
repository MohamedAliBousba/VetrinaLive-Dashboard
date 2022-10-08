import { Link, Stack } from "@mui/material";
import ArrowRightIcon from "../../assets/ArrowRightIcon";

interface ICustomLink {
  color?: string;
  isArrow?: boolean;
  children?: React.ReactNode;
  sx?: React.CSSProperties
}

const CustomLink: React.FC<ICustomLink> = ({ color = "#21B8F9", isArrow = false, children, sx }: any) => {
  return (
    <Link sx={{ color, ...sx }} href="/#">
      {isArrow ? (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <p style={{ fontSize: 15, fontWeight: 400 }}>
            {children}
          </p>
          <ArrowRightIcon color={color} />
        </Stack>
      ) : (
        <>{children}</>
      )}
    </Link>
  );
};

export default CustomLink;
