import React from "react";
import Button from "../../../components/Button";
import ButtonOutline from "../../../components/ButtonOutline";

const DeveloperListItem = (props) => {
  return (
    <div className="basis-1/4 p-4">
      <div className="w-full aspect-square flex justify-center items-center bg-white bg-opacity-20 relative  after:border-x after:border-[#DBA318] after:absolute after:h-3/4 after:w-3/4 hover:after:h-0 after:transition-all after:duration-500 before:border-y before:border-[#DBA318] before:absolute before:h-3/4 before:w-3/4 hover:before:w-0 before:transition-all before:duration-500 group">
        <img
          src={props.developerLogo}
          alt={props.developerName}
          className="group-hover:scale-125 transition-all ease-in-out duration-500"
        />
      </div>
      <div className="flex mt-5">
        <Button btnText="Project List" />
        <ButtonOutline btnText="Details" />
      </div>
    </div>
  );
};

export default DeveloperListItem;
