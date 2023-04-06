import React from "react";
import { CrossIcon, FireIcon, InfoIcon } from "../../imgs/icons";
import ProductLabel from "../ui/ProductLabel/ProductLabel";
import { IProduct, IngredientType } from "../../types/products";
import IngredientsCardsHolder from "../ui/IngredientsCard/IngredientsCardsHolder";
import { Carousel, Segmented } from "antd";
import {
  fakeProducts,
  productTagReciepCardData,
} from "./../../fakeData/productsFake";
import { useAppDispatch } from "../../store/store";
import { addProductToCartAC } from "../../store/cartSlice";

const img = fakeProducts[0].productImage;

interface ModalProductContentProps {
  data: IngredientType[] | any;
  isLoading: boolean;
  isError: boolean;
  product: IProduct;
  setModalVisibility: any;
}

const ModalProductContent = ({
  data,
  isError,
  isLoading,
  product,
  setModalVisibility,
}: ModalProductContentProps) => {
  const [dough, setDough] = React.useState<string | number>("Традиционное");
  const [pizzaSize, setPizzaSize] = React.useState<string | number>("20 см");
  const dispatch = useAppDispatch();
  const [activeIngredients, setActiveIngredients] = React.useState<IngredientType[]>(
    []
  );

  return (
    <div>
      <div className="bg-white modal__content-container max-w-[1070px] rounded-3xl">
        <div className="relative">
          <ProductLabel productLabelTxt="NEW" />
          <div className="flex flex-row">
            <div className="modal__img-container mr-8">
              {/* <Carousel autoplay > */}
              {/* {JSON.parse(product.img).map((e: string, i: number) => ( */}
              <img
                // key={i}
                width={"470px"}
                height={"470px"}
                src={`${process.env.REACT_APP_API_URL}${
                  JSON.parse(product.img)[0]
                }`}
                alt={`${product.name}`}
                // alt={img.altTxt}
              />
              {/* ))} */}
              {/* </Carousel> */}
            </div>
            <div>
              <div className="flex flex-row space-x-3 justify-start mt-10 items-center mb-5">
                {/* <div>
                  <FireIcon />
                </div> */}
                <div>
                  <h4 className="text-xl font-medium">{product.name}</h4>
                </div>
                <div>
                  {/* <InfoIcon /> */}
                </div>
              </div>
              <div>
                <p className="text-sm">{product.about}</p>
              </div>
              <div>
                <div className="my-2">
                  <Segmented
                    block
                    options={["Традиционное", "Тонкое"]}
                    value={dough}
                    onChange={setDough}
                  />
                </div>
                <div className="my-2.5 mb-7">
                  <Segmented
                    block
                    options={["20 см", "28 см", "33 см"]}
                    value={pizzaSize}
                    onChange={setPizzaSize}
                  />
                </div>
              </div>
              <div className="ingredients">
                <IngredientsCardsHolder
                  isLoading={isLoading}
                  data={data}
                  isError={isError}
                  activeIngs={activeIngredients}
                  onClick={(e: IngredientType) =>
                    setActiveIngredients((prev) => [...prev, e])
                  }
                  onDisactive={(e: IngredientType) =>
                    setActiveIngredients(
                      activeIngredients.filter((el) => el.id != e.id)
                    )
                  }
                  ingredients={product.ingredients}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button
          className="bg-primery text-white text-lg font-medium py-2 px-5 rounded"
          onClick={() => {
            setModalVisibility(false);
            let count = 1;
            dispatch(
              addProductToCartAC({
                id: product.id,
                name: product.name,
                img: product.img,
                about: product.about,
                discount: product.discount,
                count,
                ingredients: product.ingredients,
                addedIngredients: activeIngredients,
                // ingredients: product.ingredients?.concat(activeIngredients),
                price: pizzaSize === "33 см"
                ? Math.ceil(product?.price * 2.14) +
                  (activeIngredients?.length
                    ? data
                        ?.filter(
                          (e: IngredientType) =>
                            activeIngredients.indexOf(e) !== -1
                        )
                        ?.map((e: IngredientType) => e.price)
                        ?.reduce((a: number, b: number) => a + b)
                    : 0)
                : pizzaSize === "28 см"
                ? Math.ceil(product?.price * 1.75) +
                  (activeIngredients?.length
                    ? data
                        ?.filter(
                          (e: IngredientType) =>
                            activeIngredients.indexOf(e) !== -1
                        )
                        ?.map((e: IngredientType) => e.price)
                        ?.reduce((a: number, b: number) => a + b)
                    : 0)
                : product?.price +
                  (activeIngredients?.length
                    ? data
                        ?.filter(
                          (e: IngredientType) =>
                            activeIngredients.indexOf(e) !== -1
                        )
                        ?.map((e: IngredientType) => e.price)
                        ?.reduce((a: number, b: number) => a + b)
                    : 0),
              })
            );
          }}
        >
          {pizzaSize === "33 см"
            ? Math.ceil(product?.price * 2.14) +
              (activeIngredients?.length
                ? data
                    ?.filter(
                      (e: IngredientType) =>
                        activeIngredients.indexOf(e) !== -1
                    )
                    ?.map((e: IngredientType) => e.price)
                    ?.reduce((a: number, b: number) => a + b)
                : 0)
            : pizzaSize === "28 см"
            ? Math.ceil(product?.price * 1.75) +
              (activeIngredients?.length
                ? data
                    ?.filter(
                      (e: IngredientType) =>
                        activeIngredients.indexOf(e) !== -1
                    )
                    ?.map((e: IngredientType) => e.price)
                    ?.reduce((a: number, b: number) => a + b)
                : 0)
            : product?.price +
              (activeIngredients?.length
                ? data
                    ?.filter(
                      (e: IngredientType) =>
                        activeIngredients.indexOf(e) !== -1
                    )
                    ?.map((e: IngredientType) => e.price)
                    ?.reduce((a: number, b: number) => a + b)
                : 0)}{" "}
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ModalProductContent;
