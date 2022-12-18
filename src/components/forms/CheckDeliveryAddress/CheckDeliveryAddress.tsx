import React from "react";
import { LocationIcon } from "../../../imgs/icons";

const CheckDeliveryAddress = () => {
  return (
    <div className="my-11" >
      <div className="container">
        <div className="flex items-center justify-between w-full bg-white py-4 px-8 rounded-lg border border-lineGray">
          <p className="text-lg" >Проверить адрес доставки</p>
          <div className="inp__container relative">
            <input
              type="search"
              id="product__searcher"
              className="rounded-md w-[783px] h-12 border border-lineGray bg-white px-5"
            />
            <label
              htmlFor="product__searcher"
              className="label absolute top-[13px] left-4 flex flex-row space-x-1 text-txtGrey text-base font-normal"
            >
              <LocationIcon /><span>Адрес</span>
            </label>
          </div>
            <button className="btn bg-primery text-white text-base h-12 w-36 py-1 rounded-md">
              Проверить
            </button>
        </div>
      </div>
    </div>
  );
};

export default CheckDeliveryAddress;
