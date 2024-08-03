import UserProfile from "./components/UserProfile/UserProfile";
import RecentlyOrdersTable from "./components/RecentlyOrdersTable/RecentlyOrdersTable";
import RecentlyOrders from "./components/RecentlyOrders/RecentlyOrders";
import { RecentlyOrdersMock } from "@/config/constants";

// import { orders } from "@/config/constants";

const Profiles = () => {
  return (
    <main className="container">
      {/* <div className="col-span-full"> */}
      {/* <DirectionForProfile /> */}
      <UserProfile />
      {/* will hide after 1024px */}
      <RecentlyOrdersTable />
      {/* will show after 1024px */}
      <RecentlyOrders data={RecentlyOrdersMock} />
      {/* </div> */}
    </main>
  );
};

export default Profiles;
