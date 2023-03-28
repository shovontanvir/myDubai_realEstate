import React from "react";

const Skeleton = (props) => {
  return (
    <div
      className={`px-5 sm:px-20 md:px-28 lg:px-40 py-8 flex flex-wrap ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Skeleton;
