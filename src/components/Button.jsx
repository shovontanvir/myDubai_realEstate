import React from "react";

const Button = (props) => {
  return (
    <button className="border-0 hover:border hover:border-[#283646] rounded w-80">
      <div
        className={`w-full h-full flex justify-around items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent text-white rounded text-xs md:text-sm font-robotoCondensed py-2 uppercase ${props.className}`}
      >
        {props.btnText}
        <img src={props.btnImage} alt="btn image" />
      </div>
    </button>
  );
};

export default Button;
