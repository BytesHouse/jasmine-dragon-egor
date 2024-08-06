"use client";

import { useEffect, useState } from "react";
import { orderMock, orderCols } from "@/config/constants";
import { ProfileDeco } from "@/ui-kit/icons";
import { useTranslations } from "next-intl";
import TableOrderHistory from "./TableOrderHistory/TableOrderHistory";
import BlockOrderHistory from "./BlockOrderHistory/BlockOrderHistory";

export const OrderHistoryById = ({ order }: { order: any }) => {
  const {
    fullName,
    address,
    phone,
    orderItems,
    lang,
    date,
    orderNumber,
    status,
    deliveryPrice,
    totalPrice,
  } = order;
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations("OrderHistoryById");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <main>
      <div className="container !py-[50px] !gap-[25px]">
        <div className="col-span-full">
          <h4 className="simple font-semibold">
            {t("heading")} #{orderNumber.toUpperCase()}
          </h4>
          <p className="p1 font-semibold">
            {t("orderDate")} {date}
          </p>
        </div>
        <TableOrderHistory
          translate={t}
          data={orderItems}
          deliveryPrice={deliveryPrice}
          totalPrice={totalPrice}
        />
        <BlockOrderHistory
          translate={t}
          data={orderItems}
          deliveryPrice={deliveryPrice}
          totalPrice={totalPrice}
        />
        <div className="col-span-full flex gap-[25px] border border-blue-light p-[25px] _1024:border-none _1024:flex-col _1024:p-0">
          <div className="flex-1 flex flex-col">
            <h5 className="simple font-bold mb-[15px]">{t("address")}</h5>
            <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
              <ProfileDeco />
              <p className="p2 _1024:p3">{address}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h5 className="simple font-bold mb-[15px]">{t("fullName")}</h5>
            <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
              <ProfileDeco />
              <p className="p1 _1024:p2">{fullName}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h5 className="simple font-bold mb-[15px]">{t("phoneNumber")}</h5>
            <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
              <ProfileDeco />
              <p className="p1 _1024:p2">{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div>test</div>
  );
};
