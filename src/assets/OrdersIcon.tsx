import React from "react";
import { IconType } from "../types/IconType";

const OrdersIcon: React.FC<IconType> = ({ color }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.83335 1.00002C4.83335 0.539783 5.20645 0.166687 5.66669 0.166687H16.5C16.9603 0.166687 17.3334 0.539783 17.3334 1.00002C17.3334 1.46026 16.9603 1.83335 16.5 1.83335H5.66669C5.20645 1.83335 4.83335 1.46026 4.83335 1.00002Z"
        fill={color ?? "#103B66"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.83335 6.00002C4.83335 5.53978 5.20645 5.16669 5.66669 5.16669H16.5C16.9603 5.16669 17.3334 5.53978 17.3334 6.00002C17.3334 6.46026 16.9603 6.83335 16.5 6.83335H5.66669C5.20645 6.83335 4.83335 6.46026 4.83335 6.00002Z"
        fill={color ?? "#103B66"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.83335 11C4.83335 10.5398 5.20645 10.1667 5.66669 10.1667H16.5C16.9603 10.1667 17.3334 10.5398 17.3334 11C17.3334 11.4603 16.9603 11.8334 16.5 11.8334H5.66669C5.20645 11.8334 4.83335 11.4603 4.83335 11Z"
        fill={color ?? "#103B66"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666687 1.00002C0.666687 0.539783 1.03978 0.166687 1.50002 0.166687H1.50835C1.96859 0.166687 2.34169 0.539783 2.34169 1.00002C2.34169 1.46026 1.96859 1.83335 1.50835 1.83335H1.50002C1.03978 1.83335 0.666687 1.46026 0.666687 1.00002Z"
        fill={color ?? "#103B66"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666687 6.00002C0.666687 5.53978 1.03978 5.16669 1.50002 5.16669H1.50835C1.96859 5.16669 2.34169 5.53978 2.34169 6.00002C2.34169 6.46026 1.96859 6.83335 1.50835 6.83335H1.50002C1.03978 6.83335 0.666687 6.46026 0.666687 6.00002Z"
        fill={color ?? "#103B66"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666687 11C0.666687 10.5398 1.03978 10.1667 1.50002 10.1667H1.50835C1.96859 10.1667 2.34169 10.5398 2.34169 11C2.34169 11.4603 1.96859 11.8334 1.50835 11.8334H1.50002C1.03978 11.8334 0.666687 11.4603 0.666687 11Z"
        fill={color ?? "#103B66"}
      />
    </svg>
  );
};

export default OrdersIcon;
