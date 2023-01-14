import React from "react";

type typeProductLabelProps = {
  productLabelTxt: string;
};

const ProductLabel = ({ productLabelTxt }: typeProductLabelProps) => {
  return (
    <div className="bg-red flex justify-center items-center absolute left-0 top-5 rounded-r-md text-xs md:text-sm text-white uppercase w-[44px] h-[22px] md:w-[65px] md:h-[32px]">
      <p>{productLabelTxt}</p>
    </div>
  );
};

export default ProductLabel;
