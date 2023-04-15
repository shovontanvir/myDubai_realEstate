import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "./HeadingText";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";

const PhotoGallery = (props) => {
  const swiperRef = useRef();
  const [strokeLeft, setStrokeLeft] = useState("#B4B4B4");
  const [strokeRight, setStrokeRight] = useState("#B4B4B4");
  const gallery = props.images;

  return (
    <section>
      <SkeletonSingleProperty>
        <HeadingText innerText="Photo Gallery" className="items-start" />
      </SkeletonSingleProperty>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 170,
          stretch: -20,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onInit={(swiper) => (swiperRef.current = swiper)}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`image-${index}`} className="rounded-xl">
            <img
              src={image.path}
              alt={image.metaDescription}
              className="rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 w-full hidden sm:flex justify-center items-center translate-y-1/2">
        <div className="w-1/4 flex justify-between relative">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setStrokeLeft("#FFD15F");
              setStrokeRight("#B4B4B4");
            }}
            className="absolute -left-[65px]"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6121 19.6875L9.96094 15L14.6121 10.3125M10.6072 15H20.0391"
                stroke={strokeLeft}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                stroke={strokeLeft}
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setStrokeLeft("#B4B4B4");
              setStrokeRight("#FFD15F");
            }}
            className="absolute -right-[65px]"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-180"
            >
              <path
                d="M14.6121 19.6875L9.96094 15L14.6121 10.3125M10.6072 15H20.0391"
                stroke={strokeRight}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z"
                stroke={strokeRight}
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
