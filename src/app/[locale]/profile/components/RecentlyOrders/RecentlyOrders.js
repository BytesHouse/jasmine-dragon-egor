"use client";

import { RecentlyOrderCols, RecentlyOrdersMock } from "@/config/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = () => {
  const path = usePathname();
  return (
    <div className="flex col-span-full flex-col gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)]">
      <h4 className="simple font-bold">Предыдущие заказы</h4>
      <table className="w-full border-t border-l border-blue-light border-collapse bg-[var(--green-light)] ">
        <thead className="table-header-group">
          <tr className="grid grid-cols-[1fr_0.5fr_1.5fr_1fr_1fr] ">
            {RecentlyOrderCols.map((item, index) => (
              <th
                className={` p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light`}
                key={index}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {RecentlyOrdersMock.map((order, index) => (
            <tr
              key={index}
              className="grid grid-cols-[1fr_0.5fr_1.5fr_1fr_1fr]"
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
