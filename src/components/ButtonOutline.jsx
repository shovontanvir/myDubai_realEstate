import React from "react";

const ButtonOutline = (props) => {
  return (
    <button
      className={`border border-[#F1BF3F] hover:bg-[#F1BF3F] text-[#fff] transition duration-700 rounded text-xs md:text-sm font-robotoCondensed px-10 xl:px-0 2xl:px-10 py-2 uppercase w-1/2 ${props.className}`}
    >
      {props.btnText}
    </button>
  );
};

export default ButtonOutline;
