import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import tick from "../../../assets/images/property details page/icon-tick.svg";

const Highlights = (props) => {
  const highlights = props.highlights.split("#");

  return (
    <section className="mb-5">
      <SkeletonSingleProperty>
        <div className="w-3/4 flex flex-col ml-auto">
          <HeadingText innerText="Highlights" className="items-start" />
          <div className="relative before:absolute before:right-0 before:top-0 before:h-full before:w-1/3 before:border-2 before:border-l-0 before:rounded-md before:rounded-l-none before:border-[#FFD15F] rounded-md custom-border -z-10">
            <ul className="pl-28 py-5 rounded-md bg-gradient-to-r from-[#042C51] via-[#042C51] to-[#214265] w-full">
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
                  <span className="font-montserrat text-lg text-white">
                    {highlight}
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

export default Highlights;
