import React from "react";
import { CrossIcon, FireIcon, InfoIcon } from "../../imgs/icons";
import ProductLabel from "../ui/ProductLabel/ProductLabel";
import { fakeProducts } from "./../../fakeData/productsFake";

const img = fakeProducts[0].productImage;

interface modalProps {
  setModalVisibility: any;
  modalVisibility: boolean;
}

const ModalProduct = ({ setModalVisibility, modalVisibility }: modalProps) => {
  return (
    <dialog className="" open={modalVisibility}>
      <div className="">
        <div className="modal__extit_btn-container">
          <button
            className="exit__btn"
            onClick={() => setModalVisibility(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <div className=" modal__content-container">
          <div className="relative">
            <ProductLabel productLabelTxt="NEW" />
            <div className="modal__img-container">
              <img
                width={"450px"}
                height={"450px"}
                src={img.src}
                alt={img.altTxt}
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <FireIcon />
              </div>
              <div>
                <h4>Пепперони по-деревенски</h4>
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div>
              
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalProduct;
