import React from "react";
import Spinner from "../../../imgs/loaders/Spinner";
import { ISubmitBtnProps } from "../../../types/forms";

const SubmitBtn = ({
  className,
  onClick,
  txt,
  disabled,
  loading,
}: ISubmitBtnProps) => {
  return (
    <div className="my-4 w-full">
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`active:bg-secondery submit_btn bg-primery disabled:bg-lightPrimery text-sm md:text-base text-white min-width-[178px] max-w-[320px] w-full min-h-[44px] rounded-md ${className}`}
      >
        {loading ? <Spinner /> : txt}
      </button>
    </div>
  );
};

export default SubmitBtn;
