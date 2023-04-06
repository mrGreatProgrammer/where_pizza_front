import React from "react";
import "./CombosCards.scss";

const CombosCards = ({ title, img, bgColor }: any) => {
  return (
    <div
      className={`combos__cards w-[280px] h-80 md:w-[300px] md:h-[343px] rounded-xl text-white ${bgColor}  `}
    >
      <div
        className="comobos-img__container w-full h-[220px] mb-5 md:mb-0 md:h-[267px]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="combos-txt__container w-full text-xl pl-5 pb-5 pr-5 5">
        {title}
      </div>
    </div>
  );
};

export default CombosCards;
