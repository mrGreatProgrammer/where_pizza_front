import React from "react";
import CartBtnMobile from "../components/forms/Buttons/CartBtnMobile";
import CheckDeliveryAddress from "../components/forms/CheckDeliveryAddress/CheckDeliveryAddress";
import Categories from "../components/NavBars/Categories/Categories";
import Combos from "../components/NavBars/Comobos/Combos";
import GroupedProducts from "../components/Products/GroupedProducts/GroupedProducts";
import SeoTextContainer from "../components/SeoTextContainer/SeoTextContainer";
import Footer from "../components/ui/Footer/Footer";
import { useGetAllProductsQuery } from "../http/services/products";
import { useAppSelector } from "../store/store";

const MainPage = () => {
  const {products} = useAppSelector(state=>state.productsSlice)
  const {data, isError, isLoading} = useGetAllProductsQuery(1);

  return (
    <div>
      <Categories />
      <Combos />
      <CheckDeliveryAddress />

      <GroupedProducts
        title={"Пицца"}
        products={data?.rows}
        loading={isLoading}
        err={isError?"error":""}
      />

      <SeoTextContainer />
      {/* <Footer /> */}
      <CartBtnMobile />
    </div>
  );
};

export default MainPage;
