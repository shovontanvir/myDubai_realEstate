import React from "react";
import Button from "../../../components/Button";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import iconBuilding from "../../../assets/images/property details page/icon-building.png";
import iconLocationBlack from "../../../assets/images/property details page/icon-locate.png";
import iconDownload from "../../../assets/images/global/icon-download-outline.svg";
import iconLocation from "../../../assets/images/global/icon-location-outline.svg";
import iconFilm from "../../../assets/images/global/icon-film-outline.svg";
import RegisterForm from "./RegisterForm";
import ButtonOutline from "../../../components/ButtonOutline";

const SinglePropertyDescription = (props) => {
  const propertyDetails = props.property;
  console.log(propertyDetails);
  const propertyDescription =
    propertyDetails.propertyDescription.split("\r\n\r\n");

  return (
    <section>
      <SkeletonSingleProperty className="flex-col md:flex-row">
        <div className="xl:basis-2/3 xl:pr-16 text-justify lg:text-left">
          <h1 className="font-robotoCondensed font-medium text-white text-[2.5rem]">
            {propertyDetails.propertyName}
          </h1>
          <div className="flex items-center">
            <p className="font-montserrat text-white text-sm leading-4 flex items-center my-2 mr-4">
              <img src={iconBuilding} alt="building" className="mr-1" />
              {propertyDetails.developerType.name}
            </p>
            <p className="font-montserrat text-white text-sm leading-4 flex items-center my-2 mr-4">
              <img src={iconLocationBlack} alt="Location" className="mr-1" />
              {propertyDetails.propertyArea.areaName}
            </p>
          </div>
          {propertyDescription.map((paragraph, index) => (
            <p
              className="font-montserrat text-white leading-7 py-2"
              key={`paragraph-${index}`}
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap mt-8">
            <div className="w-full xl:pr-4 pt-3 xl:basis-1/2">
              <Button btnText="Download Brochure" btnImage={iconDownload} />
            </div>
            <div className="w-full xl:pl-4 pt-3 xl:basis-1/2">
              <ButtonOutline btnText="location" btnImage={iconLocation} />
            </div>
            <div className="w-full xl:pl-4 pt-3 xl:basis-1/2">
              <ButtonOutline
                btnText="Download Floor Plan"
                btnImage={iconDownload}
              />
            </div>
            <div className="w-full xl:pr-4 pt-3 xl:basis-1/2">
              <ButtonOutline btnText="view gallery" btnImage={iconFilm} />
            </div>
          </div>
        </div>
        <RegisterForm propertyName={propertyDetails.propertyName} />
      </SkeletonSingleProperty>
    </section>
  );
};

export default SinglePropertyDescription;
