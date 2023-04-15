import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import Button from "../../../components/Button";
import iconDownload from "../../../assets/images/global/icon-download-outline.svg";

const Downloads = () => {
  return (
    <section>
      <SkeletonSingleProperty>
        <HeadingText innerText="Downloads" className="items-start" />
        <div className="flex justify-between w-1/2 mx-auto">
          <div className="w-full xl:pr-12 py-3 xl:basis-1/2">
            <Button btnText="Download Brochure" btnImage={iconDownload} />
          </div>
          <div className="w-full xl:pl-12 py-3 xl:basis-1/2">
            <Button btnText="Download Brochure" btnImage={iconDownload} />
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Downloads;
