import React from "react";
import { IProductsGroupProps } from "../../../types/products";
import FilterBtn from "../../forms/Buttons/Filter/FilterBtn";
import Product from "../Product/Product";
import pizzaEmpty from "../../../imgs/empty-pizza-box.png";
import { Empty } from "antd";

const GroupedProducts = ({
  title,
  loading,
  err,
  products,
}: IProductsGroupProps) => {
  return (
    <section className="mb-10">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h3 className="font-semibold text-2xl md:text-4xl">{title}</h3>
          </div>
          <div>
            <FilterBtn />
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-4 md:gap-x-[30px] gap-y-3 md:gap-y-7 products__container">
          {products ? (
            products?.map((e) => <Product {...e} />)
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default GroupedProducts;
