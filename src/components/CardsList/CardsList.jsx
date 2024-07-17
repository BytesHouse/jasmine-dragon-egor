import { ItemCard, ItemCardHorizontal } from "@/components";

const CardsList = ({ isHorizontal, cardsData, ...props }) => {
  return isHorizontal ? (
    <div className={`container ${props?.className}`}>
      {cardsData.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </div>
  ) : (
    // <Choise itemsPerPage={itemsPerPage} />
    <div className={`container !gap-[25px] ${props?.className}`}>
      {cardsData.map((item, index) => (
        <ItemCardHorizontal key={index} {...item} />
      ))}
      {/* <Pagination /> */}
    </div>
    // <Choise2 />
  );
};

export default CardsList;
