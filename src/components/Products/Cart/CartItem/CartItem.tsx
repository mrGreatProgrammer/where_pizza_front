import React from "react";
import pizza from "../../../../imgs/pizzas/Rectangle7.png";
import { ICartItemProps } from "../../../../types/cart";
import IncDecBtns from "../../../forms/Buttons/IncDecBtns";

const CartItem: React.FC<ICartItemProps> = ({
  count,
  desc,
  discount,
  id,
  img,
  price,
  title,
}: ICartItemProps): JSX.Element => {
  return (
    <div className="bg-white border border-lineGray rounded-xl p-3">
      <div className="flex flex-row w-full">
        <div className="cart_item-img__container">
          <img width={"84"} height={"84"} src={pizza} alt="" />
        </div>
        <div>
          <div className="mb-1" >
            <h3 className="cart_item-title font-semibold text-sm">{title}</h3>
          </div>
          <div className="my-1" >
            <p className="cart_item-desc text-xs">{desc}</p>
          </div>
          <div className="mt-2 flex flex-row justify-between w-full" >
            <IncDecBtns />
            <div className="cart_item-price__container">
              <span className="font-semibold text-sm text-primery">{price} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
