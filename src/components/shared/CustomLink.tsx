import { Link, Stack } from "@mui/material";
import React from "react";
import ArrowRightIcon from "../../assets/ArrowRightIcon";

const CustomLink = ({ color = "#21B8F9", isArrow = false, children, sx }: any) => {
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
