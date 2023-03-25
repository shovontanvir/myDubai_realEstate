import React from "react";
import iconBuilding from "../../../assets/images/property details page/icon-building.png";
import iconLocation from "../../../assets/images/property details page/icon-location-black.png";
import iconVillas from "../../../assets/images/global/icon-villas.png";
import iconBed from "../../../assets/images/global/icon-bed.png";

const GridItem = (props) => {
  return (
    <div className="basis-1/3 px-1">
      <div className="border border-[#D9D9D9] rounded-lg overflow-clip">
        <img
          src="https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-1.jpg"
          alt="cover"
        />
        <div className="p-5">
          <h1 className="font-roboto text-xl">Fairway Villas</h1>
          <div className="flex flex-wrap">
            <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2 pr-3">
              <img src={iconLocation} alt="building" className="mr-1" />
              Emaar South
            </p>
            <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2 pr-3">
              <img src={iconBuilding} alt="building" className="mr-1" />
              Emaar Properties
            </p>
            <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2 pr-3">
              <img src={iconVillas} alt="building" className="mr-1" />
              Villas
            </p>
            <p className="font-montserrat text-[#535353] text-sm leading-4 flex my-2 pr-3">
              <img src={iconBed} alt="building" className="mr-1" />
              3,4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
