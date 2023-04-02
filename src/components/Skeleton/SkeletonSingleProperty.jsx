import React from "react";

const SkeletonSingleProperty = (props) => {
  return (
    <div
      className={`px-5 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-40 py-12 flex flex-wrap ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SkeletonSingleProperty;
