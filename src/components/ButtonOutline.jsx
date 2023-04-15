import React from "react";

const ButtonOutline = (props) => {
  return (
    <button className=" border border-[#283646] hover:border-0 rounded w-80">
      <div
        className={`w-full h-full flex justify-around items-center hover:bg-gradient-to-r hover:from-[#0A223A] hover:via-[#214265] hover:to-[#0A223A] text-[#fff] rounded text-xs md:text-sm font-robotoCondensed py-2 uppercase ${props.className}`}
      >
        {props.btnText}
        <img src={props.btnImage} alt="btn image" />
      </div>
    </button>
  );
};

export default ButtonOutline;
