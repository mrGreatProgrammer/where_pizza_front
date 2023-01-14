import React from "react";
import { ArrowDown, LocationIcon } from "../../../../imgs/icons";

const LocationHeader = () => {
  return (
    <div className="flex flex-row space-x-10 justify-between md:justify-start">
      <div>
        <button className="flex flex-row items-center space-x-2 rounded duration-300 py-0.5 px-1 hover:bg-gray-100">
          <div>
            <LocationIcon />
          </div>
          <span className="text-xs md:text-sm">Москва</span>
          <div className="hidden md:block" >
            <ArrowDown />
          </div>
        </button>
      </div>
      <div className="hidden md:block" >
        <button className="check__address text-xs md:text-sm">Проверить адрес</button>
      </div>
      <div>
        <span className="text-xs md:text-sm">Среднее время доставки*: </span>
        <b className="text-xs md:text-sm font-semibold">00:24:19</b>
      </div>
    </div>
  );
};

export default LocationHeader;
