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
          <div className="col-span-full flex gap-[25px] border border-blue-light p-[25px] _1024:border-none _1024:flex-col _1024:p-0">
            <div className="flex-1 flex flex-col">
              <h5 className="simple font-bold mb-[15px]">Адрес доставки</h5>
              <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
                <ProfileDeco />
                <p className="p2 _1024:p3">
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
                <p className="p1 _1024:p2">Egor Ondatrov</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h5 className="simple font-bold mb-[15px]">Номер телефона</h5>
              <div className="flex-grow items-center p-[15px] border border-blue-light w-full flex gap-[15px]">
                <ProfileDeco />
                <p className="p1 _1024:p2">+37369555534</p>
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

const TableOrderHistory = ({ data }: { data: any }) => {
  const { productName, productCode, price, quantity, totalPrice } = data;
  return (
    <table className="_1024:hidden w-full text-[var(--blue-light)] border-t border-l border-blue-light border-collapse  col-span-full">
      <thead className="table-header-group">
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] bg-green-light">
          {orderCols.map((item, index) => (
            <th
              className={`p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light _1240:p-[20px] leading-[120%]`}
              key={index}
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((order: any, index: any) => (
          <tr key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
            {Object.keys(order).map((item) => {
              // console.log(order[item]);
              return (
                <td
                  key={Math.random()}
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

const BlockOrderHistory = ({ data }: { data: any }) => {
  const { productName, productCode, price, quantity, totalPrice } = data;
  return (
    <div className="hidden _1024:flex flex-col gap-[25px] col-span-full">
      {data.map((order: any) => (
        <div className="flex w-full flex-col border border-blue-light justify-between">
          {Object.keys(order).map((item, index) => {
            // console.log(order[item]);
            return (
              <div
                key={Math.random()}
                className="flex items-center border-b border-b-blue-light last:border-none"
              >
                <strong
                  key={`order-${index}`}
                  className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]"
                >
                  {orderCols[index].title}
                </strong>
                <p
                  key={`order-${index}`}
                  className="flex-1 p1 _768:p2 p-[15px]"
                >
                  {order[item]}
                </p>
              </div>

              // </div>
            );
          })}
        </div>
      ))}
      <div className="flex w-full flex-col border border-blue-light justify-between">
        <div className="flex items-center border-b border-b-blue-light last:border-none">
          <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
            Доставка
          </strong>
          <p className="flex-1 p1 _768:p2 p-[15px]">Бесплатно</p>
        </div>
        <div className="flex justify-center p-[15px] items-center border-b border-b-blue-light last:border-none bg-green-light">
          <strong className="font-semibold text-center text-blue-light text-h5 _768:text-p1">
            Итого: 3,200.00 Lei
          </strong>
        </div>
      </div>
    </div>
  );
};
