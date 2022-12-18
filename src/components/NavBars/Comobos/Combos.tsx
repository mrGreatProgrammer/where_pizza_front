import React from "react";
import img1 from "../../../imgs/img1.png";
import img2 from "../../../imgs/img2.png";
import CombosCards from "./CombosCards";

const combos = [
  {
    id: 1,
    title: "3 средние пиццы от 999 рублей",
    img: img1,
    bgColor: "bg-primery",
  },
  {
    id: 2,
    title: "Кэшбек 10% на самовывоз (доставка)",
    img: img2,
    bgColor: "bg-red",
  },
  {
    id: 3,
    title: "3 средние пиццы от 999 рублей",
    img: img1,
    bgColor: "bg-primery",
  },
  {
    id: 4,
    title: "Кэшбек 10% на самовывоз (доставка)",
    img: img2,
    bgColor: "bg-red",
  },
];

const Combos = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-row justify-between">
          {combos.map((e) => (
            <CombosCards
              key={e.id}
              title={e.title}
              img={e.img}
              bgColor={e.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Combos;
