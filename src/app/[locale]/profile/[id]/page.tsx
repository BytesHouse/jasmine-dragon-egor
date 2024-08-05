"use client";

import { OrderHistoryById } from "@/components/OrderHistoryById/OrderHistoryById";
import { getHistory } from "@/utils/getHistory";

export default function page({ params }: { params: { id: string } }) {
  const history = getHistory();
  console.log(history);
  const orderId = decodeURIComponent(params.id);
  const neededOrder = history.find(
    (order: any) => order.orderNumber === orderId
  );
  console.log(neededOrder);
  return (
    <main>
      <OrderHistoryById order={neededOrder} />
    </main>
  );
}
