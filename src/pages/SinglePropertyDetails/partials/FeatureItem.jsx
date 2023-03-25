import React from "react";

const FeatureItem = (props) => {
  return (
    <div className="flex items-center justify-between border-b border-[#242424] my-2 py-2 w-full">
      <div className="flex items-center">
        <img src={props.featureImage} alt="feature" className="mr-5" />
        <h1 className="font-oswald text-[0.846875rem] sm:text-sm md:text-base lg:text-lg text-[#242424] uppercase">
          {props.featureText}
        </h1>
      </div>
      <div className="flex items-center">
        <h1 className="font-oswald text-[0.846875rem] sm:text-sm md:text-base lg:text-lg text-[#242424] uppercase">
          {props.featureDetails}
        </h1>
      </div>
    </div>
  );
};

export default FeatureItem;
