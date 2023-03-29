import React from "react";
import { IngredientType } from "../../../types/products";
import IngredientsCard from "./IngredientsCard";

interface IngredientsCardsHolderProps {
  ingredients?: IngredientType[];
  onClick: any;
  activeIngs: any;
}

const IngredientsCardsHolder = ({
  ingredients,
  activeIngs,
  onClick
}: IngredientsCardsHolderProps) => {
  return (
    <div className="IngredientsCardsHolder flex flex-wrap flex-row gap-3 max-h-56 overflow-y-auto">
      {ingredients?.map((e) => (
        <>
          <IngredientsCard
            activeIngs={activeIngs}
            onClick={onClick}
            ingredient={e}
          />
          {/* <IngredientsCard  ingredient={e} />
          <IngredientsCard ingredient={e} />
          <IngredientsCard ingredient={e} /> */}
        </>
      ))}
    </div>
  );
};

export default IngredientsCardsHolder;
