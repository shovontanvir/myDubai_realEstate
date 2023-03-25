import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import ReactPlayer from "react-player/youtube";

const PropertyVideo = (props) => {
  return (
    <section>
      <SkeletonSingleProperty>
        <HeadingText innerText="Video" />
        <div className="w-full flex justify-center aspect-video">
          <ReactPlayer url={props.url} width="100%" height="100%" />
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default PropertyVideo;
