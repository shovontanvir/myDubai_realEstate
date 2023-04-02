import React from "react";
import FilterSearch from "../../components/FilterSearch";
import Skeleton from "../../components/Skeleton/Skeleton";
import ListItem from "../ListView/partials/ListItem";
import GridItem from "./partials/GridItem";

const GridView = (props) => {
  const properties = props.properties;
  return (
    <div className="w-full max-h-[115vh] overflow-scroll scrollbar-hide flex flex-wrap my-10 px-1">
      {properties.map((property) => (
        <GridItem
          key={property.propertyName}
          coverImage={property.images.filter((image) => {
            if (image.type === "cover") {
              return image.path;
            }
          })}
          propertyName={property.propertyName}
          areaName={property.propertyArea.areaName}
          developerName={property.developerType.name}
          propertyType={property.propertyType.name}
          unitSize={property.unitType.size}
        />
      ))}
    </div>
  );
};

export default GridView;
