import React from "react";

const SkeletonSingleProperty = (props) => {
  return (
    <div
      className={`px-5 sm:px-16 md:px-36 lg:px-48 xl:px-72 2xl:px-96 py-12 flex flex-wrap ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SkeletonSingleProperty;
