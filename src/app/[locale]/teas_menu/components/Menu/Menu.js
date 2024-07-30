import { Hotsales, Lables, Pagination } from "@/components";
import Recently_viewed from "@/components/Recently_viewed/Recently_viewed";

const Menu = () => {
  return (
    <>
      <div className="container !pb-0">
        <h4 className="col-span-full">Чайное меню</h4>
      </div>
      <Lables />
      <Hotsales />
      {/* <Pagination /> */}
      <Recently_viewed />
      {/* <Pagination /> */}
    </>
  );
};

export default Menu;
