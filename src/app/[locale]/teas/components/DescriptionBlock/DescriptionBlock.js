import ImagesComponent from "../ImagesComponent/ImagesComponent";
import FavoriteButton from "@/ui-kit/FavoriteButton/FavoriteButton";
import Counter from "@/ui-kit/Counter/Counter";
import { Cart } from "@/ui-kit/icons";
import { useProductCart } from "@/components/Providers/ProductCartProvider";

const DescriptionBlock = ({ product }) => {
  const { name, subtype, description, strength, brewRes } = product;
  const { addToCart } = useProductCart();
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
        <FavoriteButton />
        <strong className="">Описание:</strong>
        <p>
          {description
            ? description
            : `${name} – это высококачественный чай, который подарит вам истинное наслаждение и уют. Этот чай обладает уникальным ароматом и богатым вкусом, который способен удовлетворить даже самых требовательных ценителей. Каждая чашка ${name} наполняет вас энергией и согревает душу, создавая атмосферу гармонии и спокойствия. Позвольте себе наслаждаться моментами с ${name} – чай, который вдохновляет.`}
        </p>
        <strong>Харрактеристики</strong>
        <ul className="list-disc pl-4">
          <li>Крепость чая: {strength ? strength : "?"}/10</li>
          <li>Стойкость к завариванию: {brewRes ? brewRes : "?"}/10</li>
          <li>Сорт чая: {subtype ? subtype : "Не указано"}</li>
        </ul>
        <div className="flex gap-[50px]">
          <Counter />
          <button className="buttonToCart1" onClick={handleClickAddToCart}>
            <Cart />
            <span className="text-h5 font-Nunito-Sans font-semibold _1240:text-[20px] _1024:text-h5 _768:text-[20px] _491:text-p3">
              В корзину
            </span>
          </button>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default DescriptionBlock;
