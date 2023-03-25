import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import iconAeroplane from "../../../assets/images/property details page/icon-airport.png";
import NearbyItem from "./NearbyItem";

const Nearby = (props) => {
  const nearby = props.nearby;
  return (
    <section>
      <SkeletonSingleProperty className="justify-center text-center">
        <HeadingText innerText="Nearby" />

        <p className="font-montserrat text-[#242424] leading-7 py-2">
          {nearby.locDescription}
        </p>
        <div className="flex flex-wrap w-full justify-center items-start mt-10">
          {nearby.nearby.map((item, index) => (
            <NearbyItem
              image={iconAeroplane}
              title={item.title}
              key={`nearbyPlaces-${index}`}
            />
          ))}
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Nearby;
