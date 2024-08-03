import { OrderHistoryById } from "@/components/OrderHistoryById/OrderHistoryById";

export default function page() {
  return (
    <main>
      <div className="container !py-[50px] !gap-[25px]">
        <OrderHistoryById />
      </div>
    </main>
  );
}
