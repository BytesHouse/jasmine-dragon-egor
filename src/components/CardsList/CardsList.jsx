'use client'
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from '@/components/Providers/ProductCartProvider'

const CardsList = ({ isHorizontal = true, cardsData, ...props }) => {
  const { addToCart } = useProductCart();
  return isHorizontal ? (
    <div className={`container ${props?.className}`} id={props?.id}>
      {cardsData?.map((item, index) => (
        <ItemCard key={index} item={item} onClick={addToCart} />
      ))}
    </div>
  ) : (
    // <Choise itemsPerPage={itemsPerPage} />
    <div className={`container !gap-[25px] ${props?.className}`} id={props?.id}>
      {cardsData?.map((item, index) => (
        <ItemCardHorizontal key={index} {...item} />
      ))}
      {/* <Pagination /> */}
    </div>
    // <Choise2 />
  );
};

export default CardsList;
