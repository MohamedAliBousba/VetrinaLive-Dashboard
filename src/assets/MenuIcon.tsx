import React from "react";
import { IconType } from "../types/IconType";

const MenuIcon: React.FC<IconType> = ({style, color}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M3.25116 12H21.2512"
        stroke={color ?? "#103B66"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.25116 6H21.2512"
        stroke={color ?? "#103B66"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.25116 18H21.2512"
        stroke={color ?? "#103B66"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
