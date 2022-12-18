import React from "react";
import { ICategories } from "../../../types/categories";

const CategoryCard = ({ id, icon, title, link, tag, active }: ICategories) => {
  return (
    <div className="rounded-xl bg-white duration-300 border border-[#f0f0f0] hover:shadow  cursor-pointer w-[135px] h-[104px] flex flex-col space-y-2 justify-center items-center">
      {/* <div> */}
      <div>{icon}</div>
      <div className={`text-lg ${active?"text-red":""}`}>{title}</div>
      {/* </div> */}
    </div>
  );
};

export default CategoryCard;
