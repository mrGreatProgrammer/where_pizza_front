import React from "react";
import { FilterIcon } from "../../../../imgs/icons";
import FilterDrawer from "./FilterDrawer";

const FilterBtn = () => {
  const [visibleFilterMiniDrawer, setVisibleFilterMiniDrawer] = React.useState(false)

  function onOpen() {
    setVisibleFilterMiniDrawer(true);
  }
  function onClose() {
    setVisibleFilterMiniDrawer(false);
  }
  function onFilter() {
    setVisibleFilterMiniDrawer(false);
  }

  return (
    <div>
      <button onClick={onOpen} className="btn border rounded-md py-1.5 bg-white hover:shadow-sm px-3 border-lineGray flex flex-row space-x-2 items-center">
        <FilterIcon />
        <span className="text-base" >Фильтры</span>
      </button>
      <FilterDrawer visibleFilterMiniDrawer={visibleFilterMiniDrawer} onClose={onClose} onFilter={onFilter} />
      {/* <div className="hidden filter__side_bar-container">
        <div className="filter__side_bar bg-white">

        </div>
      </div> */}
    </div>
  );
};

export default FilterBtn;
