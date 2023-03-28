import React from "react";
import Button from "../../../components/Button";
import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";
import ButtonOutline from "../../../components/ButtonOutline";

const ListItem = (props) => {
  return (
    <div className="px-1 py-3 w-full">
      <div className="flex flex-wrap border border-[#D9D9D9] rounded-lg overflow-clip p-1">
        <div className="basis-1/3">
          <img
            src={props.coverImage[0].path}
            alt="cover"
            className="h-full rounded-l-md"
          />
        </div>
        <div className="basis-2/3 p-5">
          <h1 className="font-roboto text-xl text-white">
            {props.propertyName} at {props.developerName}
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
          <p className="font-montserrat text-white leading-7 my-4">
            {props.description}
          </p>
          <div className="flex py-2 ">
            <Button btnText="Details" className="mr-2" />
            <ButtonOutline btnText="Enquiry" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
