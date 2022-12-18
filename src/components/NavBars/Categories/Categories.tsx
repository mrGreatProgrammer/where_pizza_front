import React from "react";
import {
  ComboIcon,
  DessertIcon,
  DrinksIcon,
  FireIcon,
  PizzaIcon,
  SauceIcon,
  SnacksIcon,
  SushiIcon,
} from "../../../imgs/icons";
import { ICategories } from "../../../types/categories";
import CategoryCard from "./CategoryCard";

const categories: ICategories[] = [
  { id: 1, icon: <FireIcon />, title: "Акции", link: "", tag: "", active: true },
  { id: 2, icon: <PizzaIcon />, title: "Пицца", link: "", tag: "", active: false },
  { id: 3, icon: <SushiIcon />, title: "Суши", link: "", tag: "", active: false },
  { id: 4, icon: <DrinksIcon />, title: "Напитки", link: "", tag: "", active: false },
  { id: 5, icon: <SnacksIcon />, title: "Закуски", link: "", tag: "", active: false },
  { id: 6, icon: <ComboIcon />, title: "Комбо", link: "", tag: "", active: false },
  { id: 7, icon: <DessertIcon />, title: "Десерты", link: "", tag: "", active: false },
  { id: 8, icon: <SauceIcon />, title: "Соусы", link: "", tag: "", active: false },
];

const Categories = () => {
  return (
    <div className="categories-container my-7">
      <div className="container">
        <div className="categories flex flex-row justify-between">
          {categories.map((e) => (
            <CategoryCard {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
