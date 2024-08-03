"use client";

import { RecentlyOrderCols, RecentlyOrdersMock } from "@/config/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = () => {
  const path = usePathname();
  const t = useTranslations("RecentlyOrders");
  return (
    <div className="flex col-span-full flex-col gap-[25px] text-blue-light _1024:hidden">
      <h4 className="simple font-bold">{t("heading")}</h4>
      <table className="w-full border-t border-l border-blue-light border-collapse bg-green-light">
        <thead className="table-header-group">
          <tr className="grid grid-cols-[0.75fr_0.75fr_1.5fr_1fr_1fr]">
            {RecentlyOrderCols.map((item, index) => (
              <th
                className={`p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light`}
                key={index}
              >
                {t(item.text)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RecentlyOrdersMock.map((order, index) => (
            <tr
              key={index}
              className="grid grid-cols-[0.75fr_0.75fr_1.5fr_1fr_1fr]"
            >
              {Object.keys(order).map((item) => {
                // console.log(order[item]);
                return (
                  item != "id" && (
                    // <div
                    //   key={order["id"]}
                    //   className="p-[25px] border-l max-w-[345px]"
                    // >

                    <td
                      key={`order-${index}${order.id}`}
                      className="p-[20px] flex items-center border-r border-b border-blue-light"
                    >
                      {item === "link" ? (
                        <Link href={`${path}/${order.orderNumber}`}>test</Link>
                      ) : item === "status" ? (
                        t(order[item])
                      ) : (
                        order[item]
                      )}
                    </td>
                    // </div>
                  )
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlyOrders;
