import React from "react";
import { IProduct } from "../../../types/products";
import BtnChooseProduct from "../../forms/Buttons/BtnChooseProduct";
import ModalProduct from "../../Modal/ModalProduct";
import ProductLabel from "../../ui/ProductLabel/ProductLabel";

const Product = ({
  id,
  productDiscount,
  productImage,
  productLabelTxt,
  productName,
  productPrice,
  productReciepe,
}: IProduct): JSX.Element => {
  const [modalVisibility, setModalVisibility] = React.useState(false);

  function showModal() {
    
  }
  function closeModal(){
    
  }

  return (
    <>
      <div className="product__card bg-white border border-lineGray rounded-[20px]">
        <div className="relative flex flex-row md:flex-col">
          {productLabelTxt && (
            <ProductLabel productLabelTxt={productLabelTxt} />
          )}
          <div className="product__img-container flex items-center justify-center  ">
            <img
              className="product__img-img rounded-3xl"
              src={productImage.src}
              alt={productImage.altTxt}
            />
          </div>
          <div className="mt-4 pt-4 px-5 pb-5">
            <div className="flex flex-col h-[92px]">
              <div className="product__name-container">
                <h6
                  onClick={() => {
                    setModalVisibility(true);
                  }}
                  className="product__name text-sm md:text-lg font-semibold"
                >
                  {productName}
                </h6>
              </div>
              <div className="product__reciepe-container mt-3 text-xs md:text-base w-44 md:max-w-[260px] h-full flex items-center">
                <p className="truncate">{productReciepe.join(", ")}</p>
              </div>
            </div>
            <div className="product__bottom_content-container mt-4 flex flex-row justify-between">
              <div className="hidden md:block product__btn-container">
                <BtnChooseProduct txt="Выбрать" />
              </div>
              <div className="product__price-container flex flex-row-reverse md:flex-col items-center md:items-start">
                {productDiscount && (
                  <s className="product__discount text-sm text-txtGrey">
                    {productDiscount} ₽
                  </s>
                )}
                <p className="product__price text-primery text-sm md:text-lg font-semibold bg-lightPrimery md:bg-transparent rounded-md py-1.5 px-4 md:py-0 md:px-0  mr-3 md:mr-0">
                 от {productPrice} ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalProduct
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
      />
    </>
  );
};

export default Product;
