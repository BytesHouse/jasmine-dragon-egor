"use client";
import { ItemCard, ItemCardHorizontal } from "@/components";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AlertItem = ({ name, text }) => {
  return (
    <div>
      <p className="text-[20px] font-bold text-ellipsis line-clamp-2">{name}</p>
      <p className="p1 mt-2">{text}</p>
    </div>
  );
};

const getFavoritesList = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem("favorites")
    return JSON.parse(data ?? "[]")
  }
};

const CardsList = ({
  isHorizontal = true,
  cardsData,
  id = "cardsList",
  ...props
}) => {
  const t = useTranslations("Menu");

  const { addToCart } = useProductCart();
  const [favorites, setFavorites] = useState(getFavoritesList())
  const handleAddToCart = (item) => {
    addToCart(item);
    // alert("всё рабоатет");
    toast(<AlertItem name={item?.name} text={t("addedToCart")} />);
  };

  // useEffect(() => {
  //   const getFavoritesList = () => {
  //     const data = localStorage.getItem("favorites")
  //     setFavorites(JSON.parse(data ?? "[]"))
  //   };
  //   getFavoritesList()
  // }, [])

  return (
    <>
      <ul
        className={`container ${props?.className} _768:!gap-x-[15px] _768:!gap-y-[25px]`}
        id={id}
      >
        {isHorizontal
          ? cardsData?.map((item, index) => (
            <ItemCard
              index={index}
              key={item?.id}
              item={item}
              isFavorite={favorites?.includes(item?.id)}
              onClick={handleAddToCart}
            />
          ))
          : cardsData?.map((item, index) => (
            <ItemCardHorizontal
              key={item?.id}
              isFavorite={favorites?.includes(item?.id)}
              item={item}
              onClick={handleAddToCart}
            />
          ))}
      </ul>
      <ToastContainer
        position="bottom-right"
        closeButton={false}
        // autoClose={false}
        autoClose={2500}
        // hideProgressBar={false}
        newestOnTop={true}
        pauseOnFocusLoss={false}
        // draggable
        pauseOnHover={false}
        // theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default CardsList;
