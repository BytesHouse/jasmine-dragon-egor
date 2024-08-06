"use client";
import UserProfile from "./components/UserProfile/UserProfile";
import RecentlyOrdersTable from "./components/RecentlyOrdersTable/RecentlyOrdersTable";
import RecentlyOrders from "./components/RecentlyOrders/RecentlyOrders";
import { RecentlyOrdersMock } from "@/config/constants";
import { getHistory } from "@/utils/getHistory";
import Link from "next/link";
import { useLocale } from "next-intl";

// import { orders } from "@/config/constants";

const Profiles = () => {
  const history = getHistory();
  const lang = useLocale();
  // console.log(history);
  return (
    <main>
      {history.length === 0 ? (
        <div className="container !gap-[25px]">
          <h3 className="simple col-span-full text-center _491:text-h4 font-semibold">
            Вы не сделали ещё ни одного заказа
          </h3>
          <div className="col-span-full flex justify-center gap-[25px]">
            {/* <p className="p1 ">Исправить?</p> */}
            <Link href={`/${lang}/menu`} className="buttonToCart1 !w-[50%]">
              Меню
            </Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <UserProfile history={history} />
          <RecentlyOrdersTable data={history} />
          <RecentlyOrders data={history} />
        </div>
      )}
    </main>
  );
};

export default Profiles;
