import { Cancelation, ChooseHeart } from "@/ui-kit/icons";
import Counter from "@/ui-kit/Counter/Counter";
import Image from "next/image";
import ButtonCartDelete from "@/ui-kit/ButtonCartDelete/ButtonCartDelete";
import { useTranslations } from "next-intl";

const OrderListItem = ({
  isSmall = false,
  item,
  deleteProd,
  increment,
  decrement,
}) => {
  const { name, price, description, id, quantity, discount } = item;
  const handleDeleteProd = (e) => {
    // e.stopPropagation();
    deleteProd(id);
  };
  const t = useTranslations("Cart");
  return (
    <div
      className={`flex  ${
        isSmall
          ? "p-[15px] border-[var(--blue-light)] gap-[25px]"
          : "p-[25px] border-[var(--green-bg)] hover:border-[var(--blue-light)] hover:bg-green-light transition duration-300 ease-in-out gap-[25px] _1240:w-full _1600:p-[10px] _768:gap-[15px] _768:border-blue"
      } border  items-center`}
    >
      <div
        className={`relative ${
          isSmall ? "max-w-[187px]" : "max-w-[250px]"
        } w-full _768:flex-1`}
      >
        <Image
          // className="svgchoise2"
          src={"/assets/Images/tea-mock.webp"}
          alt="teagreen"
          height={isSmall ? 187 : 250}
          width={isSmall ? 187 : 250}
        />
        {!isSmall && (
          <ChooseHeart className="absolute top-[15px] right-[15px] hover:fill-blue-light" />
        )}
      </div>
      <div className="flex flex-col gap-[25px] _768:gap-[15px] _768:flex-1">
        <h4 className="font-medium text-ellipsis line-clamp-2 _1024:text-[24px]">
          {name}
        </h4>
        {!isSmall && (
          <p className="p1 _1024:p2">
            {description
              ? description
              : "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам."}
          </p>
        )}
        <div className="flex flex-col gap-[25px] _768:gap-[15px]">
          <Counter
            initialValue={quantity}
            increment={() => increment(id)}
            decrement={() => decrement(id)}
          />
          <div className="flex flex-row gap-[15px] items-center not-italic">
            {discount == 0 ? (
              <span className="text-h5 font-Nunito-Sans text-blue-light font-semibold _768:text-h5 _491:text-p1">
                {price}
              </span>
            ) : (
              <>
                <span className="text-h5 font-Nunito-Sans text-blue-light font-semibold _768:text-h5 _491:text-p1">
                  {price - discount}
                </span>
                <span className="discount _768:text-p1 _491:text-p3">
                  {price}
                </span>
              </>
            )}
          </div>
        </div>
        <ButtonCartDelete
          onClick={handleDeleteProd}
          className="hidden _768:flex"
        >
          {t("deleteFromCart")}
        </ButtonCartDelete>
      </div>

      <div className="flex-grow flex justify-end _768:hidden">
        <button
          // type="button"
          onClick={handleDeleteProd}
        >
          <Cancelation isMini={true} />
        </button>
      </div>
    </div>
  );
};

export default OrderListItem;
