"use client";

import { RecentlyOrderCols } from "@/config/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = ({ data }) => {
  const path = usePathname();
  const t = useTranslations("RecentlyOrders");
  return (
    <div className="hidden _1024:flex flex-col gap-[25px] col-span-full">
      {data.map((order) => (
        <div className="flex w-full flex-col border border-blue-light justify-between">
          {Object.keys(order).map((item, index) => {
            // console.log(order[item]);
            return (
              item != "id" && (
                <div
                  key={Math.random()}
                  className="flex justify-center items-center border-b border-b-blue-light last:border-none"
                >
                  {item === "link" ? (
                    <div className="p-[15px] w-full flex">
                      <Link
                        className="bg-blue text-blue-light p-[15px] flex-grow text-center"
                        href={`${path}/${order.orderNumber}`}
                      >
                        Показать заказ
                      </Link>
                    </div>
                  ) : (
                    <>
                      <strong
                        key={Math.random()}
                        className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]"
                      >
                        {RecentlyOrderCols[index - 1].title}
                      </strong>
                      {item === "status" ? (
                        <p className="flex-1 p1 _768:p2 p-[15px]">
                          {t(order[item])}
                        </p>
                      ) : (
                        <p className="flex-1 p1 _768:p2 p-[15px]">
                          {order[item]}
                        </p>
                      )}
                    </>
                  )}
                </div>
              )
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RecentlyOrders;
