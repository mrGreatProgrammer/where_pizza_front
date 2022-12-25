import React from "react";
import { CrossIcon, FireIcon, InfoIcon } from "../../imgs/icons";
import ProductLabel from "../ui/ProductLabel/ProductLabel";
import ProductTagCard from "../ui/ProductTagCard/ProductTagCard";
import {
  fakeProducts,
  productTagReciepCardData,
} from "./../../fakeData/productsFake";
import { Segmented } from "antd";

const img = fakeProducts[0].productImage;

interface modalProps {
  setModalVisibility: any;
  modalVisibility: boolean;
}

const ModalProduct = ({ setModalVisibility, modalVisibility }: modalProps) => {
  const [dough, setDough] = React.useState<string | number>("Традиционное");
  const [pizzaSize, setPizzaSize] = React.useState<string | number>("20 см");

  return (
    // <dialog className="z-10" open={modalVisibility} onClose={(e)=>{setModalVisibility(false);console.log(e)}} >

    <div
      className={`${
        modalVisibility ? "flex" : "hidden"
      } backdrop-blur-lg w-full h-screen fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-10`}
    >
      <div className="modal__extit_btn-container">
        <button className="exit__btn" onClick={() => setModalVisibility(false)}>
          <CrossIcon />
        </button>
      </div>
      <div className="bg-white modal__content-container max-w-[1070px] rounded-3xl">
        <div className="relative">
          <ProductLabel productLabelTxt="NEW" />
          <div className="flex flex-row">
            <div className="modal__img-container">
              <img
                width={"450px"}
                height={"450px"}
                src={img.src}
                alt={img.altTxt}
              />
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
              <div></div>
              <div>
                <div>
                  {/* {productTagReciepCardData.map((e) => (
                    <ProductTagCard
                      key={e.id}
                      id={e.id}
                      // icon={e.icon}
                      title={e.title}
                    />
                  ))} */}
                </div>
              </div>
              <div>
                <div>
                  <Segmented
                    block
                    options={["Традиционное", "Тонкое"]}
                    value={dough}
                    onChange={setDough}
                  />
                </div>
                <div>
                  <Segmented
                    block
                    options={["20 см", "28 см", "33 см"]}
                    value={pizzaSize}
                    onChange={setPizzaSize}
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </dialog>
  );
};

export default ModalProduct;
