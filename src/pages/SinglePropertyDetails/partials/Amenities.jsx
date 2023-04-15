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
      <SkeletonSingleProperty className="justify-center">
        <HeadingText innerText="Amenities" className="items-start" />
        <div className="flex justify-between">
          <div className="basis-1/3 pr-10">
            <p className="font-montserrat text-white leading-7 text-justify py-2">
              {amenities.description}
            </p>
          </div>
          <div className="flex flex-wrap basis-2/3 pl-10 justify-between">
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
                  <span className="font-montserrat text-white text-lg">
                    {item}
                  </span>
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
                  <span className="font-montserrat text-white text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Amenities;
