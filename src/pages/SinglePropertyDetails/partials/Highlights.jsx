import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import tick from "../../../assets/images/property details page/icon-tick.png";

const Highlights = (props) => {
  const highlights = props.highlights.split("#");

  return (
    <section className="mb-5">
      <SkeletonSingleProperty>
        <HeadingText innerText="Highlights" />
        <div className="w-full flex justify-center">
          <ul>
            {highlights.map((highlight, index) => (
              <li
                className="flex items-center leading-8"
                key={`highlight-${index}`}
              >
                <img
                  src={tick}
                  alt="tick"
                  className="mr-5 w-[20px] h-[11.43px]"
                />
                <span className="font-montserrat text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Highlights;
