import React from "react";
import { ICategories } from "../../../types/categories";

const CategoryCard = ({ id, icon, title, link, tag, active }: ICategories) => {
  return (
    <div className="rounded-xl bg-white duration-300 border border-[#f0f0f0] hover:shadow  cursor-pointer  flex flex-row md:flex-col space-x-2 md:space-y-2 justify-center items-center py-[11px] px-[12px] md:py-5 md:w-[135px] md:h-[104px]">
      <div>{icon}</div>
      <div className={`text-sm md:text-lg ${active?"text-red":""}`}>{title}</div>
    </div>
  );
};

export default CategoryCard;
