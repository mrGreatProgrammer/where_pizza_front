import { Image } from "antd";
import React from "react";
import { IngredientType } from "../../../types/products";
import ingredientImg from "../../../imgs/ingredient.png";

interface IngredientsCardProps {
  ingredient: IngredientType;
  onClick: any;
  activeIngs: any;
  onDisactive: any;
}

const IngredientsCard = ({
  ingredient,
  onClick,
  activeIngs,
  onDisactive,
}: IngredientsCardProps) => {
  return (
    <div
      onClick={() =>
        activeIngs?.find((e: number) => ingredient.id === e)
          ? onDisactive(ingredient.id)
          : onClick(ingredient.id)
      }
      className={`w-24 IngredientsCard border rounded-lg items-center flex flex-col shadow-sm transition-shadow hover:shadow hover:cursor-pointer ${
        activeIngs?.find((e: number) => ingredient.id === e)
          ? "border-secondery"
          : ""
      }`}
    >
      <div className="ingredientsCard__img_container">
        <img className="w-20" src={ingredientImg} alt={ingredient.name} />
        {/* <Image loading="lazy" alt={ingredient.name} src={ingredientImg} /> */}
      </div>
      <div className="ingredientsCard__title_container text-xs my-1.5">
        {ingredient.name}
      </div>
      <div className="ingredientsCard__price text-base mt-1 mb-1.5">
        {ingredient.price}$
      </div>
    </div>
  );
};

export default IngredientsCard;
