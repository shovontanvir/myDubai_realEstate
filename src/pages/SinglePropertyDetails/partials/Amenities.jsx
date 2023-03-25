import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import returnDownForward from "../../../assets/images/property details page/icon-return-down-forward.png";

const Amenities = (props) => {
  const amenities = props.amenities;

  const features = amenities.features.split("#");
  const features1 = [];
  const features2 = [];

  features.map((item, index) =>
    index + 1 <= Math.ceil(features.length / 2)
      ? features1.push(item)
      : features2.push(item)
  );

  return (
    <section>
      <SkeletonSingleProperty className="justify-center text-center">
        <HeadingText innerText="Amenities" />
        <p className="font-montserrat text-[#242424] leading-7 py-2">
          {amenities.description}
        </p>
        <div className="flex flex-wrap w-full justify-around">
          <ul className="text-left w-full lg:w-auto pl-8 sm:pl-12 lg:pl-0">
            {features1.map((item, index) => (
              <li
                className="flex items-center leading-8"
                key={`features1-${index}`}
              >
                <img
                  src={returnDownForward}
                  alt="return-down-forward"
                  className="mr-5 w-[20px] h-[11.43px]"
                />
                <span className="font-montserrat text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="text-left w-full lg:w-auto pl-8 sm:pl-12 lg:pl-0">
            {features2.map((item, index) => (
              <li
                className="flex items-center leading-8"
                key={`features2-${index}`}
              >
                <img
                  src={returnDownForward}
                  alt="return-down-forward"
                  className="mr-5 w-[20px] h-[11.43px]"
                />
                <span className="font-montserrat text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Amenities;
