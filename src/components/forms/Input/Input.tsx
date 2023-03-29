import React from "react";
import { EyeIcon, EyeSlashIcon } from "../../../imgs/icons";
import { IInputProps } from "../../../types/forms";

const Input = ({
  className,
  elId,
  formController,
  inpName,
  inpType,
  errMsg,
  label,
  defaultValue,
}: IInputProps) => {
  const [inpTypeChanger, setInpTypeChanger] = React.useState(inpType);

  return (
    <div className={`input my-4 ${className} relative`}>
      <label
        className="label text-txtGrey mb-2 text-xs md:text-sm"
        htmlFor={inpName}
      >
        {label}
      </label>
      <input
        type={inpTypeChanger}
        name={inpName}
        id={elId}
        defaultValue={defaultValue}
        {...formController}
        className={
          "border text-xs md:text-sm border-lineGray bg-white rounded-md min-h-[44px] px-4"
        }
      />
      {inpType === "password" ? (
        <div className="icon__contianer absolute top-10 right-3">
          {inpTypeChanger === "password" ? (
            <div onClick={() => setInpTypeChanger("text")}>
              <EyeSlashIcon />
            </div>
          ) : (
            <div onClick={() => setInpTypeChanger("password")}>
              <EyeIcon />
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
      <span className="err_msg text-xs text-red">{errMsg}</span>
    </div>
  );
};

export default Input;
