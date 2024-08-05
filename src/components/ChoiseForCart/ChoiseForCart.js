import { useTranslations } from "next-intl";
import OrderListItem from "../OrderListItem/OrderListItem";

const ChoiseForCart = ({ products, deleteProd, increment, decrement }) => {
  const t = useTranslations("Cart");
  return (
    <div className="col-span-7 flex flex-col gap-25 relative gap-[25px] max-w-[840px] _1240:col-span-full _1240:max-w-none ">
      {products.length ? (
        products.map((item, index) => (
          <OrderListItem
            deleteProd={deleteProd}
            increment={increment}
            decrement={decrement}
            item={item}
            key={index}
          />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center text-h3 font-Nunito-Sans text-blue-light">
          {t("emptyCart")}
        </div>
      )}
    </div>
  );
};

export default ChoiseForCart;
