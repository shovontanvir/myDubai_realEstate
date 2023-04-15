import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import DeveloperListItem from "./DeveloperListItem";

const DeveloperList = (props) => {
  return (
    <section>
      <div className="w-full bg-gradient-to-r from-[#DBA318] via-[#FFD670] to-[#DBA318] mb-20 py-1">
        <div className="w-full h-full bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D]">
          <div className="w-full h-full bg-footer bg-repeat-x">
            <Skeleton>
              <div className="flex flex-wrap w-full">
                {props.developers.map((developer) => (
                  <DeveloperListItem
                    developerLogo={developer.logo}
                    developerName={developer.name}
                  />
                ))}
              </div>
            </Skeleton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperList;
