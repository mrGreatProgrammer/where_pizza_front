import React from "react";
import CartBtnMobile from "../components/forms/Buttons/CartBtnMobile";
import CheckDeliveryAddress from "../components/forms/CheckDeliveryAddress/CheckDeliveryAddress";
import Categories from "../components/NavBars/Categories/Categories";
import Combos from "../components/NavBars/Comobos/Combos";
import GroupedProducts from "../components/Products/GroupedProducts/GroupedProducts";
import SeoTextContainer from "../components/SeoTextContainer/SeoTextContainer";
import Footer from "../components/ui/Footer/Footer";
import { useAppSelector } from "../store/store";

const MainPage = () => {
  const {products} = useAppSelector(state=>state.productsSlice)

  return (
    <div>
      <Categories />
      <Combos />
      <CheckDeliveryAddress />

      <GroupedProducts
        title={"Пицца"}
        products={products}
        loading={false}
        err=""
      />

      <SeoTextContainer />
      {/* <Footer /> */}
      <CartBtnMobile />
    </div>
  );
};

export default MainPage;
