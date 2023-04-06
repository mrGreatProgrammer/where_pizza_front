import React from "react";
import MakeOrderForm from "../../components/forms/MakeOrderForm/MakeOrderForm";
import PromoCodeContainer from "../../components/forms/PromoCodeContainer/PromoCodeContainer";
import CartItem from "../../components/Products/Cart/CartItem/CartItem";
import { useAppSelector } from "../../store/store";

const MakeOrderPage = () => {
  const { products } = useAppSelector((state) => state.cartSlice);

  return (
    <div>
      <div className="container">
        <div className="px-52" >
          <div className="makeOrderPage__products_container">
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
                  addedIngredients={e.addedIngredients}
                />
              ))
            ) : (
              <div className="cart__drawer-products--empty">empty</div>
            )}
          </div>
            <div>
              <PromoCodeContainer />
            </div>
            <div>
              <MakeOrderForm />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrderPage;
