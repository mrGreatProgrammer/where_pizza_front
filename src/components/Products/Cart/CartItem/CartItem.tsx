import React from "react";
import pizza from "../../../../imgs/pizzas/Rectangle7.png";
import { IProductCart } from "../../../../types/cart";
import IncDecBtns from "../../../forms/Buttons/IncDecBtns";

const CartItem: React.FC<IProductCart> = ({
  count,
  about,
  discount,
  id,
  img,
  price,
  name,
}: IProductCart): JSX.Element => {

  return (
    <div className="bg-white border border-lineGray rounded-xl p-3 mb-5 w-[380px]">
      <div className="flex flex-row w-full">
        <div className="cart_item-img__container w-20 h-20 mr-3">
          <img
            // width={"84"}
            // height={"84"}
            src={`${process.env.REACT_APP_API_URL}${JSON.parse(img)[0]}`}
            alt={`where_pizza${id}`}
          />
        </div>
        <div className="w-[230px]" >
          <div className="mb-1">
            <h3 className="cart_item-title font-semibold text-sm">{name}</h3>
          </div>
          <div className="my-1">
            <p className="cart_item-desc text-xs">{"Традиционное тесто, 23 см"}</p>
          </div>
          <div className="mt-2 flex flex-row justify-between w-full">
            <IncDecBtns productId={id} count={count} />
            <div className="cart_item-price__container">
              <span className="font-semibold text-sm text-primery">
                {price} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
