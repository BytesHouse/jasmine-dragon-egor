"use client";

import { RecentlyOrderCols } from "@/config/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = ({ data }) => {
  const path = usePathname();
  const t = useTranslations("RecentlyOrders");
  return (
    <div className="flex col-span-full flex-col gap-[25px] text-blue-light _1024:hidden">
      <h4 className="simple font-bold">{t("heading")}</h4>
      <table className="w-full border-t border-l border-blue-light border-collapse bg-green-light">
        <thead className="table-header-group">
          <tr className="grid grid-cols-[1fr_0.75fr_1.5fr_1fr_1fr]">
            {RecentlyOrderCols.map((item) => (
              <th
                className={`p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light`}
                key={Math.random()}
              >
                {t(item.text)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <OrderItemTable order={order} translate={t} path={path} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlyOrders;

const OrderItemTable = ({ order, translate, path }) => {
  const t = translate;
  return (
    <tr
      key={Math.random()}
      className="grid grid-cols-[1fr_0.75fr_1.5fr_1fr_1fr]"
    >
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {order.orderNumber.toUpperCase()}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {order.date}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {order.address}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {order.status}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        <Link href={`${path}/${order.orderNumber}`}>test</Link>
      </td>
    </tr>
  );
};
