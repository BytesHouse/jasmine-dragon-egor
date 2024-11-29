"use client";
// import avatar from "../../../public/assets/Images/avatar.png";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/ui-kit/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useProduct } from "../Providers/ContextProvider";


const Feedbacks = () => {
  const t = useTranslations("Feedbacks");
  const swiperRef = useRef();
  const { reviewsList } = useProduct();
  return (
    <div className="container">
      <h5 className="col-span-full">{t("heading")}</h5>
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: "auto",
          },
        }}
        // initialSlide={1}
        className="w-full col-span-full !overflow-visible"
      >
        {reviewsList.map((item, index) => {
          return (
            <SwiperSlide key={index} className="feedback">
              <Image
                className="h-[150px] _768:h-[100px] w-[150px] bg-cover rounded-full"
                src={item.avatar}
                alt="avatar"
                width={150}
                height={150}
              />
              <div className="flex flex-col gap-[25px]">
                <h4 className="text-white _768:text-p1">{item.fullName}</h4>
                <p className="p1 text-white _768:p3">{item.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex gap-[50px] justify-center col-span-full _768:gap-[15px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="linkfeedbacks text-white text-p1 font-Nunito-Sans font-semibold _768:text-p2"
        >
          <ArrowLeft />
          {t("prev")}
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="linkfeedbacks text-white text-p1 font-Nunito-Sans font-semibold _768:text-p2"
        >
          {t("next")}
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
