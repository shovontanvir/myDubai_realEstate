import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import FeatureItem from "./FeatureItem";
import HeadingText from "./HeadingText";
import price from "../../../assets/images/property details page/icon-cash-outline.png";
import type from "../../../assets/images/property details page/icon-building-red.png";
import location from "../../../assets/images/property details page/icon-location.png";
import bedrooms from "../../../assets/images/property details page/icon-bedroom.png";

const VillaFeatures = (props) => {
  const villa = props.villa;
  return (
    <section className="mb-8">
      <SkeletonSingleProperty>
        <HeadingText innerText={villa.propertyName} className="items-center" />
        <div className="flex flex-wrap w-full">
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pr-6">
            <FeatureItem
              featureImage={price}
              featureText="Starting Price"
              featureDetails={villa.startingPrice}
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pl-6">
            <FeatureItem
              featureImage={type}
              featureText="Type"
              featureDetails={villa.propertyType.name}
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pr-6">
            <FeatureItem
              featureImage={location}
              featureText="Location"
              featureDetails={villa.propertyArea.areaName}
            />
          </div>
          <div className="lg:basis-1/2 flex flex-wrap w-full lg:pl-6">
            <FeatureItem
              featureImage={bedrooms}
              featureText="Bedrooms"
              featureDetails={villa.unitType.size}
            />
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default VillaFeatures;
