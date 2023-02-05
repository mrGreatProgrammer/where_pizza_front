import { Drawer } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../../../imgs/icons";
import { useAppSelector } from "../../../store/store";
import CartDrawer from "./CartDrawer";
import SubmitBtn from "./SubmitBtn";
// import { message } from 'antd';

const CartBtn = ({ price = 0 }): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const { totalPrice, totalCountProducts } = useAppSelector(
    (state) => state.cartSlice
  );

  const navigate = useNavigate()

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  function onClickHandlerOrder(event:any) {
    navigate('/orders')
  }


  return (
    <div>
      <button
        onClick={showDrawer}
        className="bg-primery py-2 px-4 text-white text-base flex flex-row space-x-2 rounded active:bg-secondery"
      >
        <CartIcon />
        <span>
          <span className="price mr-1">
            {totalPrice < 9999 ? totalPrice : "+9999"}
          </span>
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
                  onClick={onClickHandlerOrder}
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
