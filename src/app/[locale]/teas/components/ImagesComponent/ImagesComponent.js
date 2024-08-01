"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "@/ui-kit/icons";

const image1 = "/assets/Images/tea-mock.png";
const image2 = "/assets/Images/cheainic.png";
const image3 = "/assets/Images/cheaitar.png";
const image4 = "/assets/Images/cupof2tea.png";
const image5 = "/assets/Images/teabig.png";

const ImagesComponent = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="col-span-7 w-full flex gap-[25px] flex-col _1024:col-span-full">
        <div className="grid grid-cols-2 w-full gap-[25px] _1024:hidden">
          <Image
            className=""
            src={image1}
            alt="img-1"
            width={563}
            height={563}
          />
          <Image
            className=""
            src={image1}
            alt="img-2"
            width={563}
            height={563}
          />
        </div>
        <div className="grid grid-cols-3 gap-[25px] _1024:hidden">
          <Image
            className="aspect-square object-cover"
            src={image3}
            alt="img-3"
            height={256}
            width={256}
          />
          <Image
            className="aspect-square object-cover"
            src={image4}
            alt="img-4"
            height={256}
            width={256}
          />
          <Image
            className="aspect-square object-cover"
            src={image5}
            alt="img-5"
            height={256}
            width={256}
          />
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          centeredSlides={true}
          // initialSlide={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            490: {
              centeredSlides: false,
            },
          }}
          pagination={{
            type: "fraction",
          }}
          // loop={true}
          modules={[Pagination]}
          className="!hidden col-span-full w-full !overflow-visible _1024:!block "
        >
          <SwiperSlide className="!w-max">
            <Image
              className="_1024:w-64"
              src={image1}
              alt="img-1"
              width={563}
              height={563}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="_1024:w-64"
              src={image1}
              alt="img-2"
              width={563}
              height={563}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={image3}
              alt="img-3"
              height={256}
              width={256}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={image4}
              alt="img-4"
              height={256}
              width={256}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={image5}
              alt="img-5"
              height={256}
              width={256}
            />
          </SwiperSlide>
        </Swiper>
        <div className="hidden _1024:flex justify-center col-span-full gap-20">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeft />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagesComponent;
