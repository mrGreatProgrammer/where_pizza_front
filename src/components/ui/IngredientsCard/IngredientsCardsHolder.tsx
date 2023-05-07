import React from "react";
import { IngredientType } from "../../../types/products";
import IngredientsCard from "./IngredientsCard";
import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import SkeletonInput from "antd/es/skeleton/Input";

interface IngredientsCardsHolderProps {
  ingredients?: IngredientType[];
  onClick: any;
  activeIngs: any;
  onDisactive: any;
  isLoading: boolean;
  isError: boolean;
  data: IngredientType[];
}
// const arr: number[] = [1,2,3,4];
const IngredientsCardsHolder = ({
  ingredients,
  activeIngs,
  onClick,
  onDisactive,
  isLoading,
  isError,
  data,
}: IngredientsCardsHolderProps) => {
  return (
    <div className="IngredientsCardsHolder flex flex-wrap flex-row gap-3 max-h-56 w-96 overflow-y-auto">
      {!isLoading
        ? //@ts-ignore
          data?.map((e: IngredientType) => (
            <IngredientsCard
              activeIngs={activeIngs}
              onClick={onClick}
              ingredient={e}
              onDisactive={onDisactive}
              key={e.id}
            />
          ))
        : Array(10).map((e: any, id: number) => (
            <Skeleton active key={id}>
              <SkeletonImage />
              <SkeletonInput />
              <SkeletonInput />
            </Skeleton>
          ))}
    </div>
  );
};

export default IngredientsCardsHolder;
