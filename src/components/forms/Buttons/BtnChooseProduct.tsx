import React from "react";

type BtnChooseProductPropsType = { txt: string; onClick: any };

const BtnChooseProduct: React.FC<BtnChooseProductPropsType> = ({
  txt,
  onClick,
}: BtnChooseProductPropsType): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="bg-primery px-8 py-[13px] text-white text-base rounded-md active:bg-secondery"
    >
      {txt}
    </button>
  );
};

export default BtnChooseProduct;
