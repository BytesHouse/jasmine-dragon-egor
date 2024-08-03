"use client";
import UserProfile from "./components/UserProfile/UserProfile";
import RecentlyOrdersTable from "./components/RecentlyOrdersTable/RecentlyOrdersTable";
import RecentlyOrders from "./components/RecentlyOrders/RecentlyOrders";
import { RecentlyOrdersMock } from "@/config/constants";
import { getHistory } from "@/utils/getHistory";

// import { orders } from "@/config/constants";

const Profiles = () => {
  const history = getHistory();
  console.log(history);
  return (
    <main className="container">
      {/* <div className="col-span-full"> */}
      {/* <DirectionForProfile /> */}
      <UserProfile />
      {/* will hide after 1024px */}
      <RecentlyOrdersTable data={history} />
      {/* will show after 1024px */}
      <RecentlyOrders data={history} />
      {/* </div> */}
    </main>
  );
};

export default Profiles;
