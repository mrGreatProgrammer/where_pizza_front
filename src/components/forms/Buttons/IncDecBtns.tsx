import React from "react";
import {
  decremmentProductAC,
  incremmentProductAC,
  removeProductFromCartAC,
} from "../../../store/cartSlice";
import { useAppDispatch } from "../../../store/store";

const IncDecBtns = ({ productId, count }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className=" w-[92px] h-8 grid grid-cols-3 rounded-md">
      <button
        // disabled={count <= 1}
        onClick={() => {
          if (count <= 1) {
            dispatch(removeProductFromCartAC(productId));
          } else {
            dispatch(decremmentProductAC({ id: productId }));
          }
        }}
        className="bg-lightPrimery text-primery incdecBtn rounded-l-md"
      >
        -
      </button>
      {/* <input
        className="text-center w-full bg-lightPrimery text-primery"
        type="number"
        value={count}
      /> */}
      <div className="text-center w-full bg-lightPrimery text-primery">
        {count}
      </div>
      <button
        onClick={() => dispatch(incremmentProductAC({ id: productId }))}
        className="text-primery incdecBtn  bg-lightPrimery rounded-r-md"
      >
        +
      </button>
    </div>
  );
};

export default IncDecBtns;
