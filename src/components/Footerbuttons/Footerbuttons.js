"use client";
// import Strelka from "../../assets/Images/Strelka.svg";
import Link from "next/link";
import { useState } from "react";
import Cup from "../../ui-kit/icons/Cup/Cup";
import TeaLeaves from "../../ui-kit/icons/TeaLeaves/TeaLeaves";
import Image from "next/image";
import Strelka from "../../ui-kit/icons/Strelka/Strelka";
import SwitchLanguage from "../../ui-kit/SwitchLanguge/SwitchLanguge";
import { useLocale, useTranslations } from "next-intl";

const Footerbuttons = ({ className, onClick }) => {
  const [isShopShow, setIsShopShow] = useState(false);
  const t = useTranslations("Footer");
  const lang = useLocale();
  return (
    <ol className={className}>
      <li className="col-span-3 _1240:col-span-half">
        <ol className="flex flex-col gap-[25px]">
          <li onClick={onClick}>
            <Link href={`/${lang}/about`} className="footerbutton">
              {t("aboutUs")}
            </Link>
          </li>
          <li onClick={onClick}>
            <Link href={`/${lang}/menu`} className="footerbutton">
              {t("menu")}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}`} className="footerbutton">
              {t("shop")}
            </Link>
            <button
              onClick={() => setIsShopShow(!isShopShow)}
              className={`ml-[15px] self-end transition ${isShopShow && "-rotate-180"
                }`}
              title="Arrow button"
            >
              <Strelka />
            </button>
          </li>
          {isShopShow && (
            <div
              id="footerShop"
              className={`flex flex-col gap-[10px] -mt-[10px] transition`}
            >
              <Link href={`/${lang}`} onClick={() => alert(t("developing"))}>
                <Cup />
                {t("dishes")}
              </Link>
              <Link href={`/${lang}/menu`} onClick={onClick}>
                <TeaLeaves />
                {t("tea")}
              </Link>
            </div>
          )}
          <li onClick={onClick}>
            <Link href={`/${lang}/shopping_cart`} className="footerbutton">
              {t("cart")}
            </Link>
          </li>
          <li onClick={onClick}>
            <Link href={`/${lang}/faq`} className="footerbutton">
              {t("faq")}
            </Link>
          </li>
        </ol>
      </li>
      <li className="col-span-3 _1240:col-span-half">
        <ol className="flex flex-col gap-[25px]">
          <li onClick={onClick}>
            <Link href={`/${lang}/profile`} className="footerbutton">
              {t("profile")}
            </Link>
          </li>
          <li onClick={onClick}>
            <Link href={`/${lang}/favorites`} className="footerbutton">
              {t("favorites")}
            </Link>
          </li>
          {/* <li>
            <Link href={`/${lang}`} className="footerbutton">
              Карьера
            </Link>
          </li> */}
          <li onClick={onClick}>
            <Link href={`/${lang}/contacts`} className="footerbutton">
              {t("contacts")}
            </Link>
          </li>
          <li>
            <p className="footerbutton">{t("language")}</p>
            <SwitchLanguage />
          </li>
        </ol>
      </li>
    </ol>
  );
};

export default Footerbuttons;
