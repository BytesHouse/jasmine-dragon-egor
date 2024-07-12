import UserProfile from "./components/UserProfile/UserProfile";
import RecentlyOrders from "./components/RecentlyOrders/RecentlyOrders";
import { orders } from "@/config/constants";

const Profiles = () => {
  return (
    <main className="container">
      {/* <div className="col-span-full"> */}
      {/* <DirectionForProfile /> */}
      <UserProfile />
      <RecentlyOrders orders={orders} />
      {/* </div> */}
    </main>
  );
};

export default Profiles;
