"use client";
import Link from "next/link";
import CardsList from "../CardsList/CardsList";
import { useProduct } from "../Providers/ContextProvider";
import { useLocale, useTranslations } from "next-intl";

const MenuPreview = () => {
  const { productsList } = useProduct();
  const data = productsList.slice(0, 6);
  const lang = useLocale();
  const t = useTranslations("Menu");

  return (
    <div className="container !py-[25px]">
      <CardsList
        isHorizontal
        cardsData={data}
        className="col-span-full !py-0"
      />
      <div className="col-span-full flex justify-center">
        <Link href={`/${lang}/menu`} className="w-full flex justify-center">
          <button className="buttonToCart1">{t("buttonMore")}</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuPreview;
