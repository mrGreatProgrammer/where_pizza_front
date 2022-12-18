import React from "react";
import './CombosCards.scss'

const CombosCards = ({title, img, bgColor}:any) => {
  return (
    <div className={`combos__cards w-[300px] h-[343px] rounded-xl text-white ${bgColor}  `}>
      <div className="comobos-img__container w-full h-[267px]" style={{ backgroundImage: `url(${img})`}} ></div>
      <div className="combos-txt__container text-xl pl-5 pb-5 pr-12">{title}</div>
    </div>
  );
};

export default CombosCards;
