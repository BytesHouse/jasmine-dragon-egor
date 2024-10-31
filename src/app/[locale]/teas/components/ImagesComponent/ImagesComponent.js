"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "@/ui-kit/icons";

const image1 = "/assets/Images/tea-mock.webp";
const image2 = "/assets/Images/cheainic.webp";
const image3 = "/assets/Images/cheaitar.webp";
const image4 = "/assets/Images/cupof2tea.webp";
const image5 = "/assets/Images/teabig.webp";

const ImagesComponent = ({ product }) => {
  const swiperRef = useRef();
  return (
    <>
      <div className="col-span-7 w-full flex gap-[25px] flex-col _1024:col-span-full">
        <div className="grid grid-cols-2 w-full gap-[25px] _1024:hidden">
          <Image
            className=""
            src={product.imageUrl[0] || image1}
            alt="img-1"
            width={563}
            height={563}
          />
          <Image
            className=""
            src={product.imageUrl[2] || image2}
            alt="img-2"
            width={563}
            height={563}
          />
        </div>
        <div className="grid grid-cols-3 gap-[25px] _1024:hidden">
          <Image
            className="aspect-square object-cover"
            src={product.imageUrl[3] || image3}
            alt="img-3"
            height={256}
            width={256}
          />
          <Image
            className="aspect-square object-cover"
            src={product.imageUrl[4] || image4}
            alt="img-4"
            height={256}
            width={256}
          />
          <Image
            className="aspect-square object-cover"
            src={product.imageUrl[5] || image5}
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
              src={product.imageUrl[0] || image1}
              alt="img-1"
              width={563}
              height={563}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="_1024:w-64"
              src={product.imageUrl[1] || image2}
              alt="img-2"
              width={563}
              height={563}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={product.imageUrl[2] || image3}
              alt="img-3"
              height={256}
              width={256}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={product.imageUrl[3] || image4}
              alt="img-4"
              height={256}
              width={256}
            />
          </SwiperSlide>

          <SwiperSlide className="!w-max">
            <Image
              className="aspect-square object-cover"
              src={product.imageUrl[4] || image5}
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
