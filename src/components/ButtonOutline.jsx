import React from "react";

const ButtonOutline = (props) => {
  return (
    <button className="border border-brand hover:bg-brand text-brand hover:text-[#fff] transition duration-700 rounded text-xs md:text-sm lg:text-base xl:text-lg font-roboto px-10 xl:px-0 2xl:px-10 py-3 uppercase !w-full">
      {props.btnText}
    </button>
  );
};

export default ButtonOutline;
