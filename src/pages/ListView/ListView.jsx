import React from "react";
import ListItem from "./partials/ListItem";

const ListView = (props) => {
  const properties = props.properties;
  return (
    <div className="w-full flex flex-wrap py-10 px-1">
      {properties.map((property) => (
        <ListItem
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
          description={property.amenities.description}
        />
      ))}
    </div>
  );
};

export default ListView;
