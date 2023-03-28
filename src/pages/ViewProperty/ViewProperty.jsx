import React, { useState } from "react";
import FilterSearch from "../../components/FilterSearch";
import Skeleton from "../../components/Skeleton/Skeleton";
import { useStateValue } from "../../states/StateProvider";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";

const ViewProperty = (props) => {
  const [{ viewType }] = useStateValue();
  const properties = props.properties;
  return (
    <Skeleton>
      <FilterSearch title="Off Plan Properties" />
      {viewType === "grid" ? (
        <GridView properties={properties} />
      ) : (
        <ListView properties={properties} />
      )}
    </Skeleton>
  );
};

export default ViewProperty;
