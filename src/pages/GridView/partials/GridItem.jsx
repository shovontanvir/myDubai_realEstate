import React from "react";
import Button from "../../../components/Button";
import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";
import ButtonOutline from "../../../components/ButtonOutline";

const GridItem = (props) => {
  return (
    <div className="md:basis-1/2 lg:basis-1/3 px-1 py-3">
      <div className="border border-[#D9D9D9] rounded-lg overflow-clip">
        <img src={props.coverImage[0].path} alt="cover" />
        <div className="p-5">
          <h1 className="font-roboto text-xl text-white">
            {props.propertyName}
          </h1>
          <div className="flex flex-wrap w-full">
            <div className="mr-4">
              <p className="font-montserrat text-white text-sm leading-4 flex my-2 pr-3">
                <img src={iconLocation} alt="building" className="mr-1" />
                {props.areaName}
              </p>
            </div>
            <div className="mr-4">
              <p className="font-montserrat text-white text-sm leading-4 flex my-2 pr-3">
                <img src={iconBuilding} alt="building" className="mr-1" />
                {props.developerName}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="mr-4">
              <p className="font-montserrat text-white text-sm leading-4 flex my-2 pr-3">
                <img src={iconVillas} alt="building" className="mr-1" />
                {props.propertyType}
              </p>
            </div>
            <div className="mr-4">
              <p className="font-montserrat text-white text-sm leading-4 flex my-2 pr-3">
                <img src={iconBed} alt="building" className="mr-1" />
                {props.unitSize}
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-5 py-2 border-t justify-between bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]">
          <Button btnText="Details" className="mr-2" />
          <ButtonOutline btnText="Enquiry" className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default GridItem;
