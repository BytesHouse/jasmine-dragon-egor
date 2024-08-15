"use client";
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { getFavoritesList } from "@/utils/favoritesTools";
import { useTranslations } from "next-intl";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertItem = ({ item, text }) => {
  return (
    <div>
      <p className="text-[20px] font-bold text-ellipsis line-clamp-2">
        {item.name}
      </p>
      <p className="p1 mt-2">{text}</p>
    </div>
  );
};

const CardsList = ({
  isHorizontal = true,
  cardsData,
  id = "cardsList",
  ...props
}) => {
  const t = useTranslations("Menu");

  const { addToCart } = useProductCart();
  const handleAddToCart = (item) => {
    addToCart(item);
    toast(<AlertItem item={item} text={t("addedToCart")} />);
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        // autoClose={false}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
        transition={Bounce}
      />
      <ul
        className={`container ${props?.className} _768:!gap-x-[15px] _768:!gap-y-[25px]`}
        id={id}
      >
        {isHorizontal
          ? cardsData?.map((item, index) => (
              <ItemCard
                key={item.id}
                item={item}
                isFavorite={getFavoritesList().includes(item.id)}
                onClick={handleAddToCart}
              />
            ))
          : cardsData?.map((item, index) => (
              <ItemCardHorizontal
                key={item.id}
                isFavorite={getFavoritesList().includes(item.id)}
                item={item}
                onClick={handleAddToCart}
              />
            ))}
      </ul>
    </>
  );
};

export default CardsList;
