"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import { useLocale, useTranslations } from "next-intl";
// import "swiper/css/pagination";

const ContentSubHeader1 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="line ${className}"></div>`;
    },
  };

  const lang = useLocale();
  const t = useTranslations("Subheader");

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={pagination}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={25}
        centeredSlides={true}
        className="container !pt-0 !mb-[50px]"
      >
        <SwiperSlide>
          <picture className="container items-center !py-[50px] _1024:flex _1024:gap-[25px] _768:flex-col">
            {/* <div className="navigation grid-column"> */}
            <Image
              loading="eager"
              src="/assets/Images/coffee-table.webp"
              alt="coffee-table"
              width={295}
              height={295}
              className="bg-green-bg col-span-3 pr-8 _1240:pr-0 _1024:w-[124px] _768:order-2 _768:aspect-video object-cover _768:w-full"
            />
            <div className="flex flex-col gap-[10px] col-span-5">
              <p className="text-[26px] font-Playfair-Display italic _1240:text-[18px]">
                {t("slide2headingTop")}
              </p>
              <h3 className="font-medium _1240:text-h4">
                {t("slide2heading")}
              </h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <div className="flex mt-[15px] gap-[15px] justify-center">
                <Link
                  href={`/${lang}/menu`}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px] text-center"
                >
                  {t("slideButtonTeas")}
                </Link>
                <button
                  onClick={() => alert(t("developing"))}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px]"
                >
                  {t("slideButtonDishes")}
                </button>
              </div>
            </div>
            <Image
              id="widthforpic"
              src="/assets/Images/Rectangle.webp"
              alt="bigphoto"
              width={418}
              height={590}
              className="col-span-4 place-self-end pl-11 _1240:pl-0 _1024:w-[157px] _1024:place-self-center _768:hidden"
            />
            {/* </div> */}
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container h-full items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="col-span-5 gap-[10px] flex flex-col _1024:col-span-half _768:col-span-full">
              <h5 className="_1024:text-p1">{t("slide1headingTop")}</h5>
              <h3 className="font-medium _768:text-h4">Tia-guan-in</h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <button className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium mt-[15px] _1240:p-[15px]">
                {t("slideButtonNew")}
              </button>
            </div>
            <Image
              src="/assets/Images/cupof2tea.webp"
              alt="coffee-table"
              width={804}
              height={585}
              className="col-span-7 justify-self-end _1024:col-span-half _1024:aspect-square object-cover _768:col-span-full _768:aspect-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px] _1024:flex _1024:gap-[25px] _768:flex-col">
            {/* <div className="navigation grid-column"> */}
            <Image
              src="/assets/Images/coffee-table.webp"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3 pr-8 _1240:pr-0 _1024:w-[124px] _768:order-2 _768:aspect-video object-cover _768:w-full"
            />
            <div className="flex flex-col gap-[10px] col-span-5">
              <p className="text-[26px] font-Playfair-Display italic _1240:text-[18px]">
                {t("slide2headingTop")}
              </p>
              <h3 className="font-medium _1240:text-h4">
                {t("slide2heading")}
              </h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <div className="flex mt-[15px] gap-[15px] justify-center">
                <Link
                  href={`/${lang}/menu`}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px] text-center"
                >
                  {t("slideButtonTeas")}
                </Link>
                <button
                  onClick={() => alert(t("developing"))}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px]"
                >
                  {t("slideButtonDishes")}
                </button>
              </div>
            </div>
            <Image
              id="widthforpic"
              src="/assets/Images/Rectangle.webp"
              alt="bigphoto"
              width={418}
              height={590}
              className="col-span-4 place-self-end pl-11 _1240:pl-0 _1024:w-[157px] _1024:place-self-center _768:hidden"
            />
            {/* </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container h-full items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="col-span-5 gap-[10px] flex flex-col _1024:col-span-half _768:col-span-full">
              <h5 className="_1024:text-p1">{t("slide1headingTop")}</h5>
              <h3 className="font-medium _768:text-h4">Tia-guan-in</h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <button className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium mt-[15px] _1240:p-[15px]">
                {t("slideButtonNew")}
              </button>
            </div>
            <Image
              src="/assets/Images/cupof2tea.webp"
              alt="coffee-table"
              width={804}
              height={585}
              className="col-span-7 justify-self-end _1024:col-span-half _1024:aspect-square object-cover _768:col-span-full _768:aspect-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container items-center !py-[50px] _1024:flex _1024:gap-[25px] _768:flex-col">
            {/* <div className="navigation grid-column"> */}
            <Image
              src="/assets/Images/coffee-table.webp"
              alt="coffee-table"
              width={295}
              height={295}
              className="col-span-3 pr-8 _1240:pr-0 _1024:w-[124px] _768:order-2 _768:aspect-video object-cover _768:w-full"
            />
            <div className="flex flex-col gap-[10px] col-span-5">
              <p className="text-[26px] font-Playfair-Display italic _1240:text-[18px]">
                {t("slide2headingTop")}
              </p>
              <h3 className="font-medium _1240:text-h4">
                {t("slide2heading")}
              </h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <div className="flex mt-[15px] gap-[15px] justify-center">
                <Link
                  href={`/${lang}/menu`}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px] text-center"
                >
                  {t("slideButtonTeas")}
                </Link>
                <button
                  onClick={() => alert(t("developing"))}
                  className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium _1240:p-[15px]"
                >
                  {t("slideButtonDishes")}
                </button>
              </div>
            </div>
            <Image
              id="widthforpic"
              src="/assets/Images/Rectangle.webp"
              alt="bigphoto"
              width={418}
              height={590}
              className="col-span-4 place-self-end pl-11 _1240:pl-0 _1024:w-[157px] _1024:place-self-center _768:hidden"
            />
            {/* </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide className="_768:!hidden">
          <div className="container h-full items-center !py-[50px]">
            {/* <div className="navigation grid-column"> */}
            <div className="col-span-5 gap-[10px] flex flex-col _1024:col-span-half _768:col-span-full">
              <h5 className="_1024:text-p1">{t("slide1headingTop")}</h5>
              <h3 className="font-medium _768:text-h4">Tia-guan-in</h3>
              <p className="p1 _1024:p2">{t("slideDesc")}</p>
              <button className="text-white font-Playfair-Display italic flex-1 p-[25px] border border-blue transition hover:bg-blue text-h5 font-medium mt-[15px] _1240:p-[15px]">
                {t("slideButtonNew")}
              </button>
            </div>
            <Image
              src="/assets/Images/cupof2tea.webp"
              alt="coffee-table"
              width={804}
              height={585}
              className="col-span-7 justify-self-end _1024:col-span-half _1024:aspect-square object-cover _768:col-span-full _768:aspect-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Lines /> */}
    </>
  );
};

export default ContentSubHeader1;
