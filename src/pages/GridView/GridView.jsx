import React from "react";
import FilterSearch from "../../components/FilterSearch";
import Skeleton from "../../components/Skeleton/Skeleton";
import GridItem from "./partials/GridItem";

const GridView = () => {
  return (
    <Skeleton>
      <FilterSearch title="Off Plan Properties" />
      <div className="w-full flex flex-wrap py-10 px-1">
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </Skeleton>
  );
};

export default GridView;
