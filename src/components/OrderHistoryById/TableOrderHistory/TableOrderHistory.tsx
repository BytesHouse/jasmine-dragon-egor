import { orderCols } from "@/config/constants";
import OrderItemTable from "./OrderItemTable/OrderItemTable";

const TableOrderHistory = ({
  data,
  translate,
  deliveryPrice,
  totalPrice,
}: {
  data: any;
  translate: any;
  deliveryPrice: number;
  totalPrice: number;
}) => {
  // const { productName, productCode, price, quantity, totalPrice } = data;
  // console.log(data);
  const t = translate;
  return (
    <table className="_1024:hidden w-full text-[var(--blue-light)] border-t border-l border-blue-light border-collapse  col-span-full">
      <thead className="table-header-group">
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] bg-green-light">
          {orderCols.map((item, index) => (
            <th
              className={`p-[25px] text-left text-h5 font-semibold border-r border-b border-blue-light _1240:p-[20px] leading-[120%]`}
              key={index}
            >
              {t(item.toTranslate)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((orderItem: any, index: any) => (
          <OrderItemTable key={Math.random()} orderItem={orderItem} />
        ))}
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
          <td className="col-span-4 p-[20px] flex items-center border-r border-b border-blue-light">
            {t("delivery")}
          </td>
          <td className="p-[20px] flex items-center border-r border-b border-blue-light">
            {deliveryPrice == 0 ? t("free") : deliveryPrice}
          </td>
        </tr>
      </tbody>
      <tfoot className="bg-green-light flex items-center border-r border-b border-blue-light">
        <tr className="w-full grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
          <td className="col-span-4"></td>
          <td className="text-h5 font-semibold p-[20px]">
            {t("orderTotal")} {totalPrice}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TableOrderHistory;
