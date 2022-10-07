import { Link, Stack } from "@mui/material";
import React from "react";
import ArrowRightIcon from "../../assets/ArrowRightIcon";

const CustomLink = ({ color = "#21B8F9", isArrow = false, children }: any) => {
  return (
    <Link sx={{ color }} href="/#">
      {isArrow ? (
        <Stack direction="row" spacing={1.5} alignItems="center">
          <p style={{ fontSize: 15, fontWeight: 400 }}>
            {children}
          </p>
          <ArrowRightIcon />
        </Stack>
      ) : (
        <>{children}</>
      )}
    </Link>
  );
};

export default CustomLink;
