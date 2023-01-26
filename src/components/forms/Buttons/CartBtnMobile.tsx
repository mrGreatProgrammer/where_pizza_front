import { Drawer } from "antd";
import React from "react";
import { CartIcon } from "../../../imgs/icons";
import CartDrawer from "./CartDrawer";

const CartBtnMobile = ({ price = 0 }): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className="cart_btn_shadow z-10 shadow-2xl fixed bottom-5 right-5 p-4 rounded-full bg-primery md:hidden"
      >
        <div className="absolute top-[-2px] right-[-3px] bg-white border border-primery rounded-full w-5 h-5 flex justify-center items-center text-xs text-primery">
          {price}
        </div>
        <CartIcon />
      </button>
      <Drawer
      className="rounded-t-2xl"
        title="Ваш заказ"
        placement="bottom"
        onClose={onClose}
        open={open}
      >
        <CartDrawer />
      </Drawer>
    </>
  );
};

export default CartBtnMobile;
