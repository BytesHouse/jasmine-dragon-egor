"use client";

import { flexRow } from "@/config/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";
// import "swiper/css/pagination";

const Flexrow = () => {
  const t = useTranslations("Menu");
  return (
    <>
      <div className="container !pb-[50px] _768:!py-0">
        <h4 className="col-span-full">{t("heading")}</h4>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={25}
          // centeredSlides={true}
          // initialSlide={1}
          pagination={true}
          // loop={true}
          freeMode={{
            enabled: true,
            // sticky: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode]}
          className="col-span-full w-full !overflow-visible"
        >
          {flexRow.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" border border-green-bg transition hover:border-blue-light aspect-square w-full min-w-[170px] _768:!max-w-[200px]"
              >
                <a
                  className={`${item.bgPath} bg-no-repeat bg-cover flex justify-center items-center h-full`}
                  id={`tea${index + 1}`}
                  href="index.html"
                >
                  <div className="group flex flex-col items-center border-blue-light border p-[25px] _1240:p-[15px] bg-[var(--green-bg-25)] hover:bg-blue-light transition">
                    <h5 className="text-center group-hover:text-green-light mb-[15px]">
                      {t(item.h5)}
                    </h5>
                    <p className="p1 group-hover:text-green-light">
                      {t(item.p1)}
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Flexrow;
