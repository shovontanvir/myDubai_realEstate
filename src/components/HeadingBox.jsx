import React from "react";

const HeadingBox = (props) => {
  return (
    <div className="px-10 py-1 bg-[#042C51] relative">
      <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-pulse"></div>
      <h1 className="font-roboto font-medium text-[1.75rem] text-white">
        {props.heading}
      </h1>
    </div>
  );
};

export default HeadingBox;
