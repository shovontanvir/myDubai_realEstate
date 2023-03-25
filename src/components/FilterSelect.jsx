import React from "react";

const FilterSelect = (props) => {
  return (
    <select
      name={props.selectBy}
      id={props.selectBy}
      className="py-2 pl-2 pr-5 rounded-lg bg-[#DDE5EB] bg-opacity-50 border-t-2 border-[#DDE5EB] mx-3"
    >
      <option
        className="font-roboto text-lg text-[#626262]"
        value={props.searchBy}
      >
        {props.searchBy}
      </option>
      {props.selectBy.map((item) => (
        <option
          className="font-roboto text-lg text-[#626262]"
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
