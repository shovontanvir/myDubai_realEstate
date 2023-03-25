import React from "react";

const HeadingText = (props) => {
  return (
    <div className="w-full flex flex-col items-center relative mb-5">
      <h1 className="font-vidaloka text-[1.351875rem] sm:text-2xl md:text-4xl lg:text-[2.5rem] p-3 bg-white">
        {props.innerText}
      </h1>
      <div className="w-full lg:w-3/4 border border-[#C0C0C0] absolute top-1/2 -z-50"></div>
    </div>
  );
};

export default HeadingText;
