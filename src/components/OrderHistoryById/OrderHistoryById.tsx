"use client";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export const OrderHistoryById = () => {
  const size = useWindowWidth();
  return (
    <div>{size > 1024 ? <TableOrderHistory /> : <BlockOrderHistory />}</div>
  );
};

const TableOrderHistory = () => {
  return <table>table</table>;
};

const BlockOrderHistory = () => {
  return <div>div</div>;
};
