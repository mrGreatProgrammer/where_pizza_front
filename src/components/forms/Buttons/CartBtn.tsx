import { Drawer } from "antd";
import React from "react";
import { CartIcon } from "../../../imgs/icons";
import CartDrawer from "./CartDrawer";

const CartBtn = ({ price = 0 }): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={showDrawer} className="bg-primery py-2 px-4 text-white text-base flex flex-row space-x-2 rounded">
        <CartIcon />
        <span>
          <span className="price mr-1">{price}</span>
          <span className="currency">₽</span>
        </span>
      </button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <CartDrawer />
      </Drawer>
    </div>
  );
};

export default CartBtn;
