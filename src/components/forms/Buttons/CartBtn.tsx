import { Drawer } from "antd";
import React from "react";
import { CartIcon } from "../../../imgs/icons";
import { useAppSelector } from "../../../store/store";
import CartDrawer from "./CartDrawer";
import SubmitBtn from "./SubmitBtn";
// import { message } from 'antd';

const CartBtn = ({ price = 0 }): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const { totalPrice, totalCountProducts } = useAppSelector((state) => state.cartSlice);

  // const [messageApi, contextHolder] = message.useMessage();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // const success = () => {
  //   messageApi.open({
  //     type: 'success',
  //     content: 'This is a prompt message with custom className and style',
  //     className: 'custom-class',
  //     style: {
  //       marginTop: '20vh',
  //     },
  //   });
  // };

  return (
    <div>
      <button
        onClick={showDrawer}
        className="bg-primery py-2 px-4 text-white text-base flex flex-row space-x-2 rounded"
      >
        <CartIcon />
        <span>
          <span className="price mr-1">{totalPrice<9999?totalPrice:"+9999"}</span>
          <span className="currency">₽</span>
        </span>
      </button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        width={"420"}
        onClose={onClose}
        open={open}
        footer={
          <div>
            <div className="flex flex-row items-center justify-between">
              <div>
          <div>
            <span>Количество: </span>
            <span>{totalCountProducts}</span>
            <span>шт</span>
          </div>
              <div className="text-primery font-semibold text-xl">
                <span>Итого: </span>
                <span>{totalPrice}</span>
                <span> ₽</span>
              </div>
              </div>
              <div className="w-44">
                <SubmitBtn
                  className={""}
                  onClick={() => console.log("h")}
                  txt={"Оформить заказ"}
                  disabled={false}
                  loading={false}
                />
              </div>
            </div>
          </div>
        }
      >
        <CartDrawer />
      </Drawer>
    </div>
  );
};

export default CartBtn;
