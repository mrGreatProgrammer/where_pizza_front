import React from "react";
import { LocationIcon, SendIcon } from "../../../imgs/icons";

const CheckDeliveryAddress = () => {
  return (
    <div className="my-11">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-white py-4 px-8 rounded-lg border border-lineGray">
          <p className="text-base md:text-lg font-semibold md:font-normal mb-4 md:mb-0">
            Проверить адрес доставки
          </p>
          <div className="flex flex-row">
            <div className="inp__container relative">
              <input
                type="search"
                id="product__searcher"
                className="rounded-md w-[70vw] md:w-[783px] h-11 md:h-12 border border-lineGray bg-white px-3"
              />
              <label
                htmlFor="product__searcher"
                className="label absolute top-[13px] left-3 flex flex-row space-x-1 text-txtGrey text-sm md:text-base font-normal"
              > 
                <LocationIcon />
                <span>Адрес</span>
              </label>
            </div>
            <button className="btn flex justify-center items-center bg-primery text-white text-base md:ml-5 md:py-3 rounded-md h-11 md:h-12 w-11 md:w-36">
              <div className="inline-block md:hidden">
                <SendIcon />
              </div>
              <span className="hidden md:inline">Проверить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckDeliveryAddress;
