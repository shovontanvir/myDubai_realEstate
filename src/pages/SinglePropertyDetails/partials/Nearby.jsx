import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import iconCruise from "../../../assets/images/property details page/icon-cruise.png";
import NearbyItem from "./NearbyItem";

const Nearby = (props) => {
  const nearby = props.nearby;
  return (
    <section>
      <SkeletonSingleProperty className="justify-center text-center">
        <div className="w-full flex justify-center">
          <div className="w-1/2">
            <HeadingText
              innerText="Nearby Attractions"
              className="items-start"
            />
            <p className="font-montserrat text-white text-justify leading-7 py-2">
              {nearby.locDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center items-start mt-10">
          {nearby.nearby.map((item, index) => (
            <div
              className={`md:basis-1/4 xl:basis-1/5
                ${
                  (index === 0 || index === nearby.nearby.length - 1) &&
                  "-mt-16"
                }
              `}
              key={`nearbyPlaces-${index}`}
            >
              <NearbyItem image={iconCruise} title={item.title} />
            </div>
          ))}
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Nearby;
