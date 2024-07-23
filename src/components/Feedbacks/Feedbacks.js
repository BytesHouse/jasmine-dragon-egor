"use client";
// import avatar from "../../../public/assets/Images/avatar.png";
import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/ui-kit/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useScreenWidth from "@/hooks/useScreenWidth";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

const Feedbacks = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const width = useScreenWidth();
  return (
    <div className="container">
      <h5 className="col-span-full">Отзывы</h5>
      <Swiper
        slidesPerView={width < 768 ? 1 : "auto"}
        spaceBetween={25}
        // centeredSlides={true}
        // initialSlide={2}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // initialSlide={1}
        className="w-full col-span-full !overflow-visible"
      >
        <SwiperSlide className="feedback">
          <Image
            className="h-[150px] _768:h-[100px]"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white _768:text-p1">Анатолий Кирияк</h4>
            <p className="p1 text-white _768:p3">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="h-[150px] _768:h-[100px]"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white _768:text-p1">Агнесса Погасян</h4>
            <p className="p1 text-white _768:p3">
              Замечательный выбор чайной для отдыха и чилла
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="h-[150px] _768:h-[100px]"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white _768:text-p1">Анатолий Кирияк</h4>
            <p className="p1 text-white _768:p3">
              Отличная чайная со своей клёвой атмосферой, чайчиками и конечно же
              баристой, который разбирается во всех нюасмах
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback">
          <Image
            className="h-[150px] _768:h-[100px]"
            src="/assets/Images/avatar.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-[25px]">
            <h4 className="text-white _768:text-p1">Агнесса Погасян</h4>
            <p className="p1 text-white _768:p3">
              Замечательный выбор чайной для отдыха и чилла
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-[50px] justify-center col-span-full _768:gap-[15px]">
        <button
          ref={prevRef}
          // onClick={() => swiperRef.current?.slidePrev()}
          className="linkfeedbacks text-white text-p1 font-Nunito-Sans font-semibold _768:text-p2"
        >
          <ArrowLeft />
          Старые
        </button>
        <button
          ref={nextRef}
          // onClick={() => swiperRef.current?.slideNext()}
          className="linkfeedbacks text-white text-p1 font-Nunito-Sans font-semibold _768:text-p2"
        >
          Новые
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
