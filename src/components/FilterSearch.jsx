import React from "react";
import FilterSelect from "./FilterSelect";
import { useQuery } from "react-query";
import { getApiData } from "../Services/apiFunctions";
import { useStateValue } from "../states/StateProvider";

const FilterSearch = (props) => {
  const [{ lang }] = useStateValue();

  const getFilterList = () => {
    return getApiData(lang, "data/filter-list");
  };

  const { isLoading, data, isError, error } = useQuery(
    ["filter-list", lang],
    getFilterList
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  const filterList = data.data;
  console.log(filterList);

  return (
    <section className="w-full flex justify-between">
      <div className="border-b border-[#C0C0C0]">
        <h1 className="font-roboto font-medium text-[1.75rem]">
          {props.title}
        </h1>
      </div>
      <div className="flex items-center">
        <FilterSelect
          searchBy="Development Type"
          selectBy={filterList.developmentTypes}
        />
        <FilterSelect
          searchBy="Developer Type"
          selectBy={filterList.developers}
        />
        <FilterSelect
          searchBy="Property Areas"
          selectBy={filterList.propertyAreas}
        />
      </div>
    </section>
  );
};

export default FilterSearch;
