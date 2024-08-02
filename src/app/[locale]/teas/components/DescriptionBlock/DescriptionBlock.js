import ImagesComponent from "../ImagesComponent/ImagesComponent";
import FavoriteButton from "@/ui-kit/FavoriteButton/FavoriteButton";
import Counter from "@/ui-kit/Counter/Counter";
import { Cart } from "@/ui-kit/icons";
import { useProductCart } from "@/components/Providers/ProductCartProvider";
import { useTranslations } from "next-intl";

const DescriptionBlock = ({ product }) => {
  const { name, subtype, description, strength, brewRes } = product;
  const { addToCart } = useProductCart();
  const t = useTranslations("DescriptionBlock");
  const handleClickAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
  return (
    <>
      {/* <section className="col-span-full"> */}
      <ImagesComponent />
      <div className="col-span-5 w-full flex flex-col gap-[25px] _1024:col-span-full">
        <h1>«{name}»</h1>
        <FavoriteButton>{t("addToFavorites")}</FavoriteButton>
        <strong className="">{t("heading")}</strong>
        <p>{description ? description : t("description", { name })}</p>
        <strong>{t("characteristics")}</strong>
        <ul className="list-disc pl-4">
          <li>
            {t("strength")}
            {strength ? strength : "?"}/10
          </li>
          <li>
            {t("brewRes")}
            {brewRes ? brewRes : "?"}/10
          </li>
          <li>
            {t("subtype")}
            {subtype ? subtype : "Не указано"}
          </li>
        </ul>
        <div className="flex gap-[50px]">
          <Counter />
          <button className="buttonToCart1" onClick={handleClickAddToCart}>
            <Cart />
            <span className="text-h5 font-Nunito-Sans font-semibold _1240:text-[20px] _1024:text-h5 _768:text-[20px] _491:text-p3">
              {t("addToCart")}
            </span>
          </button>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default DescriptionBlock;
