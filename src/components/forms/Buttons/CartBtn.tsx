import React from "react";
import { CartIcon } from "../../../imgs/icons";

const CartBtn = ({ price = 0 }):JSX.Element => {
  return (
    <button className="bg-primery py-2 px-4 text-white text-base flex flex-row space-x-2 rounded" >
      <CartIcon />
      <span>
      <span className="price mr-1">{price}</span>
      <span className="currency">₽</span>
      </span>
    </button>
  );
};

export default CartBtn;
