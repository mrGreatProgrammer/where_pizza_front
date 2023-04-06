import React from "react";
import CartBtnMobile from "../components/forms/Buttons/CartBtnMobile";
import CheckDeliveryAddress from "../components/forms/CheckDeliveryAddress/CheckDeliveryAddress";
import Categories from "../components/NavBars/Categories/Categories";
import Combos from "../components/NavBars/Comobos/Combos";
import GroupedProducts from "../components/Products/GroupedProducts/GroupedProducts";
import SeoTextContainer from "../components/SeoTextContainer/SeoTextContainer";
import Footer from "../components/ui/Footer/Footer";
import {
  useGetAllProductsQuery,
  useGetProductsByGroupQuery,
} from "../http/services/products";
import { useAppSelector } from "../store/store";
import pizzaEmpty from "../imgs/empty-pizza-box.png";
import { Empty } from "antd";

const MainPage = () => {
  const { products } = useAppSelector((state) => state.productsSlice);
  // const {data, isError, isLoading} = useGetAllProductsQuery(1);
  const { data, isError, isLoading } = useGetProductsByGroupQuery(1);

  return (
    <div>
      <Categories />
      <Combos />
      {/* <CheckDeliveryAddress /> */}

      {data?.length ? (
        data?.map((e: any) =>
          e?.products.length ? (
            <GroupedProducts
              title={e.title}
              products={e?.products}
              loading={isLoading}
              err={isError ? "error" : ""}
            />
          ) : (
            <></>
          )
        )
      ) : (
        <div className="my-14">
          <Empty
            imageStyle={{
              height: "300px",
              display: "flex",
              justifyContent: "center",
            }}
            image={pizzaEmpty}
            description={
              <p className="my-3 text-lg font-medium">Продукты не найдены</p>
            }
          />
        </div>
      )}
      <SeoTextContainer />
      {/* <Footer /> */}
      <CartBtnMobile />
    </div>
  );
};

export default MainPage;
