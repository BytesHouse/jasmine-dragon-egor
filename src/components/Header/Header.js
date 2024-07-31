"use client";

import { useEffect, useState } from "react";
// import logo from "../../../public/assets/Images/Logo.svg";
import {
  BagIcon,
  BurgerIcon,
  Closebutton,
  HeartIcon,
  ProfileIcon,
} from "../../ui-kit/icons";
// import { useTranslation } from "react-i18next";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageSection from "../ImageSection/Imagesection";
import { Footerbuttons } from "../index";
import Breadcrumbs from "@/ui-kit/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useProductCart } from "../Providers/ProductCartProvider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { productsList } = useProductCart();
  //   const { t } = useTranslation("Header");
  //   const { pathname } = useLocation();
  const pathname = usePathname();
  const lang = useLocale();
  const t = useTranslations("Header");
  // console.log(lang);
  return (
    <>
      <header className={`w-full border-b border-blue-light`}>
        <div className="container !py-0">
          <div className="flex justify-between items-center py-4 col-span-full">
            <div className="flex justify-between w-full flex-grow">
              <Link href={`/${lang}/`}>
                <div className="flex items-center gap-6 _768:gap-[12px]">
                  <Image
                    src="/assets/Images/Logo.svg"
                    alt="logo"
                    width={81}
                    height={90}
                    className="w-auto _1024:h-[75px] _768:h-[45px]"
                  />
                  <h3 className="logo-text flex items-center gap-6 text-[var(--blue-light)] leading-relaxed _1024:text-h4 _768:text-p1">
                    Jasmine Dragon
                  </h3>
                </div>
              </Link>
              <div className="relative flex items-center gap-6 pr-3 _768:hidden">
                <Link href={`/${lang}/favorites`} aria-label="Go to favorites">
                  <HeartIcon />
                </Link>
                <Link
                  href={`/${lang}/profile`}
                  className="flex items-center gap-4 rounded-[30px] pl-6 bg-transparent font-semibold text-lg leading-[130%] text-[var(--blue-light)] border border-[var(--blue-light)] shadow-md _1024:hidden"
                  aria-label=""
                >
                  {t("profile")} <ProfileIcon />
                </Link>
                <div className="relative">
                  <Link href={`/${lang}/shopping_cart`} aria-label="Go to cart">
                    <BagIcon />
                  </Link>
                  <div className="absolute w-6 h-6 bg-[var(--blue-light)] rounded-full top-0 right-0">
                    <p className="numberofitems">{productsList.length}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="items-center justify-center hidden _1024:flex gap-[5px]"
            >
              {showMenu ? <Closebutton /> : <BurgerIcon />}
              <p className="p1 _768:p2">
                {/* {t("hello")} */}
                {t("menu")}
              </p>
            </button>
          </div>
        </div>
        {(pathname !== "/ro") & (pathname !== "/ru") ? (
          <Breadcrumbs
            breadcrumbs={pathname.split("/").slice(1, pathname.length)}
          />
        ) : (
          ""
        )}
      </header>
      {showMenu && (
        // <div className="flex gap-[50px]">
        //   <ImageSection />
        //   <div className="flex flex-col pt-[30px] gap-[25px]">
        //     <Footerbuttons />
        //     {/* <Footerbuttons2 /> */}
        //   </div>
        // </div>
        <div className="w-screen !px-[20px] z-10 bg-green-bg _1024:flex gap-[50px] justify-between hidden _768:justify-center">
          <ImageSection className="_768:hidden flex-[3] mt-[50px]" />
          <div className="flex-[2] flex justify-center">
            <Footerbuttons
              className={"footerVertical"}
              onClick={() => setShowMenu(false)}
            />
            {/* <Footerbuttons2 /> */}
          </div>
          {/* <div className="col-span-full">
        <Footerfinal />
      </div> */}
        </div>
      )}
    </>
  );
};

export default Header;
