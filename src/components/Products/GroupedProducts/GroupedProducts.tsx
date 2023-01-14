import React from "react";
import { IProductsGroupProps } from "../../../types/products";
import FilterBtn from "../../forms/Buttons/Filter/FilterBtn";
import Product from "../Product/Product";

const GroupedProducts = ({ title, loading, err, products }: IProductsGroupProps) => {
  return (
    <section
      className="mb-10"
    >
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
          {products?products?.map(e=>
            <Product 
            {...e} />
            ): "|hello|"}
        </div>
      </div>
    </section>
  );
};

export default GroupedProducts;
