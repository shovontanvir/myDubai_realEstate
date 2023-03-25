import React, { useState, useRef } from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import prev from "../../../assets/images/property details page/long-arrow-alt-left.png";
import next from "../../../assets/images/property details page/long-arrow-alt-right.png";

import { FreeMode, Navigation, Thumbs } from "swiper";

const PhotoGallery = (props) => {
  const gallery = props.images;
  const swiperRef = useRef();

  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <section>
      <SkeletonSingleProperty className="justify-center">
        <HeadingText innerText="Photo Gallery" />
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {gallery.map((item, index) => (
            <SwiperSlide key={`gallerythumbs-${index}`}>
              <img
                src={item.path}
                alt={`${item.metaDescription}-${index}`}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-1"
          onInit={(swiper) => (swiperRef.current = swiper)}
        >
          {gallery.map((item, index) => (
            <SwiperSlide key={`gallery-${index}`}>
              <img src={item.path} alt={`${item.metaDescription}-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" w-full hidden sm:flex justify-between items-center translate-y-1/2 relative">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            className="absolute -left-[65px]"
          >
            <img src={prev} alt="prev" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="absolute -right-[65px]"
          >
            <img src={next} alt="next" />
          </button>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default PhotoGallery;
