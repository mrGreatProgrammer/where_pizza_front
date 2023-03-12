import React from "react";
import { IngredientType } from "../../../types/products";
import IngredientsCard from "./IngredientsCard";

interface IngredientsCardsHolderProps {
  ingredients?: IngredientType[];
}

const IngredientsCardsHolder = ({
  ingredients,
}: IngredientsCardsHolderProps) => {
  return (
    <div className="IngredientsCardsHolder">
      {ingredients?.map((e) => (
        <IngredientsCard ingredient={e} />
      ))}
    </div>
  );
};

export default IngredientsCardsHolder;
