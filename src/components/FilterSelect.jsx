import React from "react";

const FilterSelect = (props) => {
  return (
    <select
      name={props.selectBy}
      id={props.selectBy}
      className="py-1 pl-2 pr-5 rounded-lg bg-gradient-to-r from-[#073f7b] to-[#122C47] border-t-2 border-[#DDE5EB] mx-3"
    >
      <option className="font-roboto text-lg text-white" value={props.searchBy}>
        {props.searchBy}
      </option>
      {props.selectBy.map((item) => (
        <option
          className="font-roboto text-lg text-white"
          value={item._id}
          key={item._id}
        >
          {item.name ? item.name : item.areaName}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
