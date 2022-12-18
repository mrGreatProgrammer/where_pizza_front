import React from "react";
import { FilterIcon } from "../../../../imgs/icons";

const FilterBtn = () => {
  return (
    <div>
      <button className="btn border rounded-md py-1.5 bg-white hover:shadow-sm px-3 border-lineGray flex flex-row space-x-2 items-center">
        <FilterIcon />
        <span className="text-base" >Фильтры</span>
      </button>
      <div className="hidden filter__side_bar-container">
        <div className="filter__side_bar bg-white">

        </div>
      </div>
    </div>
  );
};

export default FilterBtn;
