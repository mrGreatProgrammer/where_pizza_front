import React from "react";

type typeProductLabelProps = {
  productLabelTxt: string;
};

const ProductLabel = ({ productLabelTxt }: typeProductLabelProps) => {
  return (
    <div className="bg-red flex justify-center items-center absolute left-0 top-5 rounded-r-md text-sm text-white uppercase w-[65px] h-[32px]">
      <p>{productLabelTxt}</p>
    </div>
  );
};

export default ProductLabel;
