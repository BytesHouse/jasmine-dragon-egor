export const OrderItemTable = ({ orderItem }: { orderItem: any }) => {
  // console.log(orderItem.orderItem);
  const { id, name, price, quantity } = orderItem;
  return (
    <tr key={Math.random()} className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {name}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {id}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
         Lei
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {quantity}
      </td>
      <td
        key={Math.random()}
        className="p-[20px] flex items-center border-r border-b border-blue-light"
      >
        {price * quantity}
      </td>
    </tr>
  );
};

export default OrderItemTable;
