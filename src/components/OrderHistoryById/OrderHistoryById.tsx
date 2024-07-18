"use client";

import { useEffect, useState } from "react";
import { orderMock, orderCols } from "@/config/constants";
import { ProfileDeco } from "@/ui-kit/icons";

export const OrderHistoryById = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <div className="col-span-full">
            <h4 className="simple font-semibold">Заказ #234538902</h4>
            <p className="p1 font-semibold">Дата заказа: 14.02.2024</p>
          </div>
          <TableOrderHistory data={orderMock} />
          <BlockOrderHistory data={orderMock} />
          <div className="col-span-full flex gap-[25px] border border-blue-light p-[25px]">
            <div className="flex-1 flex flex-col">
              <h5 className="simple font-bold mb-[15px]">Адрес доставки</h5>
              <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
                <ProfileDeco />
                <p className="p2">
                  Strada Grivitei 286, Braila, Braila, 810040, 
                  <br />
                  România, +40771050788.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h5 className="simple font-bold mb-[15px]">Имя Фамилия</h5>
              <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
                <ProfileDeco />
                <p className="p1">Egor Ondatrov</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h5 className="simple font-bold mb-[15px]">Адрес доставки</h5>
              <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
                <ProfileDeco />
                <p className="p1">+37369555534</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>test</div>
      )}
    </>
  );
};

const TableOrderHistory = ({ data }) => {
  const { productName, productCode, price, quantity, totalPrice } = data;
  return (
    <table className="_1024:hidden w-full text-[var(--blue-light)] border-t border-l border-blue-light border-collapse  col-span-full">
      <thead className="table-header-group">
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] bg-green-light">
          {orderCols.map((item, index) => (
            <th
              className={`p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light`}
              key={index}
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) => (
          <tr key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
            {Object.keys(order).map((item) => {
              // console.log(order[item]);
              return (
                <td
                  key={`order-${index}`}
                  className="p-[20px] flex items-center border-r border-b border-blue-light"
                >
                  {order[item]}
                </td>
                // </div>
              );
            })}
          </tr>
        ))}
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
          <td className="col-span-4 p-[20px] flex items-center border-r border-b border-blue-light">
            Доставка
          </td>
          <td className="p-[20px] flex items-center border-r border-b border-blue-light">
            200.00 Lei
          </td>
        </tr>
      </tbody>
      <tfoot className="bg-green-light flex items-center border-r border-b border-blue-light">
        <tr className="w-full grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
          <td className="col-span-4"></td>
          <td className="text-h5 font-semibold p-[20px]">Итого: 3.200 Lei</td>
        </tr>
      </tfoot>
    </table>
  );
};

const BlockOrderHistory = ({ ...data }) => {
  const { productName, productCode, price, quantity, totalPrice } = data;
  return <div className="hidden _1024:flex">div</div>;
};
