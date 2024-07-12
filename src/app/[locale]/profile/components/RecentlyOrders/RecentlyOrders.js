"use client";

import { orderCols, ordersMock } from "@/config/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = () => {
  const path = usePathname();
  return (
    <div className="flex col-span-full flex-col gap-[25px] font-[var(--Nunito-sans)] text-[var(--blue-light)]">
      <h4 className="simple font-bold">Предыдущие заказы</h4>
      <table className="w-full border bg-[var(--green-light)]">
        <thead>
          <tr>
            {orderCols.map((item, index) => (
              <th
                className={`${
                  index === 1 ? "w-[10%]" : "w-[20%]"
                } p-[25px] text-left text-h5 font-semibold`}
                key={Math.random()}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ordersMock.map((order, index) => (
            <tr key={index} className="border bg-[var(--green-light)]">
              {Object.keys(order).map((item) => {
                console.log(order[item]);
                return (
                  item != "id" && (
                    // <div
                    //   key={order["id"]}
                    //   className="p-[25px] border-l max-w-[345px]"
                    // >
                    <td key={`order-${order.id}`} className="">
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
