import { orderCols } from "@/config/constants";

const OrderItemBlock = ({
  orderItem,
  translate,
}: {
  orderItem: any;
  translate: any;
}) => {
  const { id, name, price } = orderItem;
  const t = translate;
  // console.log(translate);
  return (
    <div className="flex w-full flex-col border border-blue-light justify-between">
      <div className="flex items-center border-b border-b-blue-light last:border-none">
        <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
          {t(orderCols[0].toTranslate)}
        </strong>
        <p className="flex-1 p1 _768:p2 p-[15px]">{name}</p>
      </div>
      <div className="flex items-center border-b border-b-blue-light last:border-none">
        <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
          {t(orderCols[1].toTranslate)}
        </strong>
        <p className="flex-1 p1 _768:p2 p-[15px]">{id}</p>
      </div>
      <div className="flex items-center border-b border-b-blue-light last:border-none">
        <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
          {t(orderCols[2].toTranslate)}
        </strong>
        <p className="flex-1 p1 _768:p2 p-[15px]">{price}</p>
      </div>
      <div className="flex items-center border-b border-b-blue-light last:border-none">
        <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
          {t(orderCols[3].toTranslate)}
        </strong>
        <p className="flex-1 p1 _768:p2 p-[15px]">Пока что 1</p>
      </div>
      <div className="flex items-center border-b border-b-blue-light last:border-none">
        <strong className="font-semibold flex-1 text-blue-light text-h5 _768:text-p1 p-[15px]">
          {t(orderCols[4].toTranslate)}
        </strong>
        <p className="flex-1 p1 _768:p2 p-[15px]">Пока что {price}</p>
      </div>
    </div>
  );
};

export default OrderItemBlock;
