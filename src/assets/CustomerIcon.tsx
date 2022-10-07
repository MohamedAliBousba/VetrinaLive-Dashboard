import React from "react";
import { IconType } from "../types/IconType";

const CustomerIcon: React.FC<IconType> = ({color}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.72039 12.8871C4.50179 12.1057 5.5616 11.6667 6.66667 11.6667H13.3333C14.4384 11.6667 15.4982 12.1057 16.2796 12.8871C17.061 13.6685 17.5 14.7283 17.5 15.8334V17.5C17.5 17.9603 17.1269 18.3334 16.6667 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5V15.8334C15.8333 15.1703 15.5699 14.5344 15.1011 14.0656C14.6323 13.5967 13.9964 13.3334 13.3333 13.3334H6.66667C6.00363 13.3334 5.36774 13.5967 4.8989 14.0656C4.43006 14.5344 4.16667 15.1703 4.16667 15.8334V17.5C4.16667 17.9603 3.79357 18.3334 3.33333 18.3334C2.8731 18.3334 2.5 17.9603 2.5 17.5V15.8334C2.5 14.7283 2.93899 13.6685 3.72039 12.8871Z"
        fill={color ?? "#103B66"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.33335C8.61929 3.33335 7.5 4.45264 7.5 5.83335C7.5 7.21407 8.61929 8.33335 10 8.33335C11.3807 8.33335 12.5 7.21407 12.5 5.83335C12.5 4.45264 11.3807 3.33335 10 3.33335ZM5.83333 5.83335C5.83333 3.53217 7.69881 1.66669 10 1.66669C12.3012 1.66669 14.1667 3.53217 14.1667 5.83335C14.1667 8.13454 12.3012 10 10 10C7.69881 10 5.83333 8.13454 5.83333 5.83335Z"
        fill={color ?? "#103B66"}
      />
    </svg>
  );
};

export default CustomerIcon;
