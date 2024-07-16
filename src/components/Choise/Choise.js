import Pagination from "../Pagination/Pagination";
import CardHorizontal from "../CardHorizontal/CardHorizontal";
import { mock } from "@/config/constants";

const Choise = () => {
  return (
    <div className="container !pt-0">
      {mock.map((item) => (
        <CardHorizontal {...item} />
      ))}
      <Pagination />
    </div>
  );
};

export default Choise;
