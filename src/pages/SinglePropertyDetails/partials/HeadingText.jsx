import React from "react";

const HeadingText = (props) => {
  return (
    <div className={`w-full flex flex-col ${props.className} relative mb-5`}>
      <div className="px-24 py-1 bg-[#042C51] relative">
        <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0"></div>
        <div className="h-full w-1 bg-[#F1BF3F] absolute left-0 top-0 animate-ping"></div>
        <h1 className="font-turretRoad font-medium text-[1.75rem] text-white">
          {props.innerText}
        </h1>
      </div>
    </div>
  );
};

export default HeadingText;
