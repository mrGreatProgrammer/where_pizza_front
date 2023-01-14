import React from "react";

const FilterBtnDrop = ({ onClick }: any) => {
  return (
    <div>
      <button
        onClick={() => onClick()}
        className="border rounded-md border-primery text-primery h-11 md:h-12  w-40 md:w-56"
      >
        Сбросить
      </button>
    </div>
  );
};

export default FilterBtnDrop;
