"use client";
// import green from '../../assets/Images/greentea.png'
// import black from '../../assets/Images/teagreen.png'
import StoreButton from "@/ui-kit/StoreButton/StoreButton";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Store = () => {
  const lang = useLocale();
  const t = useTranslations("Store");
  return (
    // <div className="store">
    <div className="container _768:!gap-x-3 !gap-y-[25px]" id="store">
      <h4 className="col-span-full">{t("heading")}</h4>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light _1600:gap-[25px] _1240:p-[25px] _768:p-[10px] _768:gap-[15px]">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/teagreen.png"
          alt="teagreen"
          width={607}
          height={607}
        />

        <h4 className="text-center _768:text-p1 _768:text-left">{t("tea")}</h4>
        <p className="p1 _768:p2">{t("cardDesc")}</p>
        <Link href={`/${lang}/menu`}>
          <StoreButton className="_768:hidden">{t("button")}</StoreButton>
          <StoreButton className="hidden _768:block">
            {t("buttonShort")}
          </StoreButton>
        </Link>
      </div>
      <div className="col-span-half flex flex-col gap-8 p-[50px] border border-blue-light transition hover:bg-green-light _1600:gap-[25px] _1240:p-[25px] _768:p-[10px] _768:gap-[15px]">
        <Image
          className="w-full aspect-square"
          src="/assets/Images/greentea.png"
          alt="greentea"
          width={607}
          height={607}
        />
        <h4 className="text-center _768:text-p1 _768:text-left">
          {t("dishes")}
        </h4>
        <p className="p1 _768:p2">{t("cardDesc")}</p>
        <StoreButton
          onClick={() => alert("В разработке!")}
          className="_768:hidden"
        >
          {t("button")}
        </StoreButton>
        <StoreButton
          onClick={() => alert("В разработке!")}
          className="hidden _768:block"
        >
          {t("buttonShort")}
        </StoreButton>
      </div>
    </div>
    // </div>
  );
};

export default Store;
