import OrderListItem from "../OrderListItem/OrderListItem";

const ChoiseForCart = ({ products, deleteProd, increment, decrement }) => {
  return (
    <div className="col-span-7 flex flex-col gap-25 relative gap-[25px] max-w-[840px] _1240:col-span-full _1240:max-w-none ">
      {products.map((item, index) => (
        <OrderListItem
          deleteProd={deleteProd}
          increment={increment}
          decrement={decrement}
          item={item}
          key={index}
        />
      ))}
    </div>
  );
};

export default ChoiseForCart;
