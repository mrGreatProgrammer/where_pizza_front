import React from "react";
import { useAppSelector } from "../../../store/store";
import CartItem from "../../Products/Cart/CartItem/CartItem";

const CartDrawer = () => {
  const { products } = useAppSelector((state) => state.cartSlice);

  return (
    <div>
      <div>
        <div className="cart__drawer-products__cotnainer">
          {products ? (
            products.map((e) => (
              <CartItem
                key={e.id}
                count={e.count}
                about={e.about}
                discount={e.discount}
                id={e.id}
                img={e.img}
                price={e.price}
                name={e.name}
              />
            ))
          ) : (
            <div className="cart__drawer-products--empty">empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
