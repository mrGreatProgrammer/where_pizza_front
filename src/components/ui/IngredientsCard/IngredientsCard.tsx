import { Image } from "antd";
import React from "react";
import { IngredientType } from "../../../types/products";
import ingredientImg from "../../../imgs/ingredient.png";

interface IngredientsCardProps {
  ingredient: IngredientType;
}

const IngredientsCard = ({ ingredient }: IngredientsCardProps) => {
  return (
    <div className="IngredientsCard">
      <div className="ingredientsCard__img_container">
        <Image loading="lazy" alt={ingredient.name} src={ingredientImg} />
      </div>
      <div className="ingredientsCard__title_container">{ingredient.name}</div>
      <div className="ingredientsCard__price">{ingredient.price}</div>
    </div>
  );
};

export default IngredientsCard;
