import { Empty } from "antd";
import React from "react";
import { useAppSelector } from "../../../store/store";
import CartItem from "../../Products/Cart/CartItem/CartItem";
import pizzaEmpty from "../../../imgs/empty-pizza-box.png";

const CartDrawer = () => {
  const { products } = useAppSelector((state) => state.cartSlice);

  return (
    <div>
      <div>
        <div className="cart__drawer-products__cotnainer">
          {products?.length ? (
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
                addedIngredients={e.addedIngredients}
                pizzaSize={e.pizzaSize}
                pizzaType={e.pizzaType}
              />
            ))
          ) : (
            <div className="mt-28">
              <Empty
                imageStyle={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                }}
                image={pizzaEmpty}
                description={
                  <p className="my-3 text-lg font-medium">
                    Продукты не найдены
                  </p>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
