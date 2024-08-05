"use client";

import { RecentlyOrderCols } from "@/config/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RecentlyOrders = ({ data }) => {
  const path = usePathname();
  const t = useTranslations("RecentlyOrders");
  return (
    <div className="hidden _1024:flex flex-col gap-[25px] col-span-full mt-[50px]">
      <h4 className="simple font-bold _768:text-h5">{t("heading")}</h4>
      {data.map((order) => (
        <OrderItem
          key={Math.random()}
          order={order}
          translate={t}
          path={path}
        />
      ))}
    </div>
  );
};

export default RecentlyOrders;

const OrderItem = ({ order, translate, path }) => {
  const t = translate;
  return (
    <div className="flex w-full flex-col border border-blue-light justify-between">
      <OrderWrapper text={t("orderNumber")}>
        <ParagraphText>{order.orderNumber.toUpperCase()}</ParagraphText>
      </OrderWrapper>
      <OrderWrapper text={t("date")}>
        <ParagraphText>{order.date}</ParagraphText>
      </OrderWrapper>
      <OrderWrapper text={t("deliveryAddress")}>
        <ParagraphText>{order.address}</ParagraphText>
      </OrderWrapper>
      <OrderWrapper text={t("status")}>
        <ParagraphText>{order.status}</ParagraphText>
      </OrderWrapper>
      <OrderWrapper>
        <div className="p-[15px] w-full flex">
          <Link
            className="bg-blue text-blue-light p-[15px] flex-grow text-center"
            href={`${path}/${order.orderNumber}`}
          >
            {t("showOrder")}
          </Link>
        </div>
      </OrderWrapper>
    </div>
  );
};

const OrderWrapper = ({ text, children }) => (
  <div className="flex justify-center items-center border-b border-b-blue-light last:border-none">
    {text ? <StrongText text={text} /> : ""}
    {children}
  </div>
);
const StrongText = ({ text }) => (
  <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
    {text}
  </strong>
);
const ParagraphText = ({ children }) => (
  <p className="flex-1 p1 _768:p2 p-[15px]">{children}</p>
);
