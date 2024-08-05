import OrderItemBlock from "./OrderItemBlock/OrderItemBlock";

export const BlockOrderHistory = ({
  data,
  translate,
}: {
  data: any;
  translate: any;
}) => {
  // const { productName, productCode, price, quantity, totalPrice } = data;
  const t = translate;
  // console.log(t);
  return (
    <div className="hidden _1024:flex flex-col gap-[25px] col-span-full">
      {data.map((orderItem: any) => (
        <OrderItemBlock
          key={Math.random()}
          orderItem={orderItem}
          translate={translate}
        />
      ))}
      <div className="flex w-full flex-col border border-blue-light justify-between">
        <div className="flex items-center border-b border-b-blue-light last:border-none">
          <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
            {t("delivery")}
          </strong>
          <p className="flex-1 p1 _768:p2 p-[15px]">{t("free")}</p>
        </div>
        <div className="flex justify-center p-[15px] items-center border-b border-b-blue-light last:border-none bg-green-light">
          <strong className="font-semibold text-center text-blue-light text-h5 _768:text-p1">
            {t("orderTotal")} 3,200.00 Lei
          </strong>
        </div>
      </div>
    </div>
  );
};

export default BlockOrderHistory;
