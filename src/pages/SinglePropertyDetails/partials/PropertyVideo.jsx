import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import ReactPlayer from "react-player/youtube";

const PropertyVideo = (props) => {
  return (
    <section>
      <SkeletonSingleProperty>
        <div className="ml-32">
          <HeadingText innerText="Video" className="items-center" />
        </div>
        <div className="w-full flex my-16 items-center">
          <div className="basis-1/2 aspect-video relative">
            <div className=" absolute border border-[#FFD15F] inset-0 transform rotate-6"></div>
            <ReactPlayer
              url={props.url}
              width="100%"
              height="100%"
              className="absolute"
            />
          </div>
          <div className="basis-1/2 px-10">
            <h1 className="font-vidaloka text-4xl text-white text-center">
              Experience <span className="text-[#FFD15F]">Luxurious</span>{" "}
              Living: <br /> Browse Our Exclusive <br /> Property Selection
            </h1>
            <p className="font-montserrat text-white text-center mt-5 leading-8 font-light">
              Discover stunning properties with breathtaking views and modern
              amenities. Your real estate journey starts here – with expert
              advice and guidance every step of the way.
            </p>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default PropertyVideo;
