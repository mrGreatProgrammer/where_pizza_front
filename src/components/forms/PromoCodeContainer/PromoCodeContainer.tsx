import { Button, Input } from "antd";
import React from "react";
import { SendIcon } from "../../../imgs/icons";
import { useAppSelector } from "../../../store/store";

const PromoCodeContainer = () => {

  const { totalPrice, totalCountProducts } = useAppSelector(
    (state) => state.cartSlice
  );

  return (
    <div className="border border-lineGray bg-white py-3 px-6 rounded-lg flex flex-row justify-between items-center">
      <div className="w-96">
        <Input.Group compact style={{ height: "48px" }}>
          <Input
            style={{ width: "calc(100% - 48px)", height: "48px" }}
            placeholder={"Промокод"}
          />
          <Button type="primary" style={{ height: "48px" }}>
            <SendIcon />
          </Button>
        </Input.Group>
      </div>
      <div>
        <div>
          {/* <div>
            <span>Количество: </span>
            <span>{totalCountProducts}</span>
            <span>шт</span>
          </div> */}
          <div className="text-primery font-semibold text-xl">
            <span>Итого: </span>
            <span>{totalPrice}</span>
            <span> ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCodeContainer;
