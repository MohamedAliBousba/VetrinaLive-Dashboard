import React from "react";
import { IconType } from "../types/IconType";

const DeliveryIcon: React.FC<IconType> = ({color}) => {
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
        d="M0.833313 1.75C0.419099 1.75 0.083313 2.08579 0.083313 2.5V13.3333C0.083313 13.7475 0.419099 14.0833 0.833313 14.0833H2.08268C1.87035 14.4807 1.74998 14.9346 1.74998 15.4167C1.74998 16.9815 3.01851 18.25 4.58331 18.25C6.14812 18.25 7.41665 16.9815 7.41665 15.4167C7.41665 14.9346 7.29627 14.4807 7.08395 14.0833H12.916C12.7037 14.4807 12.5833 14.9346 12.5833 15.4167C12.5833 16.9815 13.8518 18.25 15.4166 18.25C16.9815 18.25 18.25 16.9815 18.25 15.4167C18.25 14.9346 18.1296 14.4807 17.9173 14.0833H19.1666C19.5809 14.0833 19.9166 13.7475 19.9166 13.3333V9.16667C19.9166 8.96775 19.8376 8.77699 19.697 8.63634L17.197 6.13634C17.0563 5.99568 16.8656 5.91667 16.6666 5.91667H14.0833V2.5C14.0833 2.08579 13.7475 1.75 13.3333 1.75H0.833313ZM15.4166 12.5833H18.4166V9.47733L16.356 7.41667H14.0833V12.5833H15.4166ZM15.4166 14.0833C14.6803 14.0833 14.0833 14.6803 14.0833 15.4167C14.0833 16.153 14.6803 16.75 15.4166 16.75C16.153 16.75 16.75 16.153 16.75 15.4167C16.75 14.6803 16.153 14.0833 15.4166 14.0833ZM3.24998 15.4167C3.24998 14.6803 3.84693 14.0833 4.58331 14.0833C5.31969 14.0833 5.91665 14.6803 5.91665 15.4167C5.91665 16.153 5.31969 16.75 4.58331 16.75C3.84693 16.75 3.24998 16.153 3.24998 15.4167ZM12.5833 12.5833H4.58331H1.58331V3.25H12.5833V6.66667V12.5833Z"
        fill={color ?? "#103B66"}
      />
    </svg>
  );
};

export default DeliveryIcon;
