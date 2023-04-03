import React from "react";
import { CrossIcon } from "../../imgs/icons";
import { Modal } from "antd";
import { IProduct, IngredientType } from "../../types/products";
import IngredientsCardsHolder from "../ui/IngredientsCard/IngredientsCardsHolder";
import { useGetRecipeOfProductsQuery } from "../../http/services/products";
import ModalProductContent from "./ModalProductContent";

interface modalProps {
  setModalVisibility: any;
  modalVisibility: boolean;
  product: IProduct;
}

const ModalProduct = ({
  setModalVisibility,
  modalVisibility,
  product,
}: modalProps) => {
  const { data, isError, isLoading } = useGetRecipeOfProductsQuery(1);

  return (
    <Modal
      closeIcon={<CrossIcon />}
      destroyOnClose
      width={870}
      className=""
      open={modalVisibility}
      onCancel={() => setModalVisibility(false)}
      footer={[]}
    >
      <ModalProductContent
        data={data}
        isLoading={isLoading}
        isError={isError}
        product={product}
        setModalVisibility={setModalVisibility}
      />
    </Modal>
  );
};

export default ModalProduct;
