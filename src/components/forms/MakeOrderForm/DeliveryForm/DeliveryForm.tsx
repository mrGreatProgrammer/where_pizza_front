import React from "react";
import Input from "../../Input/Input";

interface DeliveryFormProps {
  errors: any;
  register: any;
}

const DeliveryForm = ({ errors, register }: DeliveryFormProps) => {
  return (
    <div>
      <div>
        <Input
          className={""}
          elId={""}
          formController={register("street", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
            minLength: {
              value: 6,
              message: "Минимум 8 символов",
            },
            maxLength: {
              value: 32,
              message: "Максимум 32 сивола",
            },
          })}
          inpName={"street"}
          inpType={"text"}
          defaultValue={""}
          errMsg={errors.street?.message}
          label={"Улица*"}
        />
      </div>
      <div className="grid grid-cols-5 gap-x-5">
        <div>
          <Input
            className={""}
            elId={""}
            formController={register("house", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
              },
            })}
            inpName={"house"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.house?.message}
            label={"Дом"}
          />
        </div>
        <div>
          <Input
            className={""}
            elId={""}
            formController={register("porch", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
              },
            })}
            inpName={"porch"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.porch?.message}
            label={"Подъезд"}
          />
        </div>
        <div>
          <Input
            className={""}
            elId={""}
            formController={register("floor", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
              },
            })}
            inpName={"floor"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.floor?.message}
            label={"Этаж"}
          />
        </div>
        <div>
          <Input
            className={""}
            elId={""}
            formController={register("intercom", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
              },
            })}
            inpName={"intercom"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.intercom?.message}
            label={"Квартира"}
          />
        </div>
        <div>
          <Input
            className={""}
            elId={""}
            formController={register("intercom", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
              },
            })}
            inpName={"intercom"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.intercom?.message}
            label={"Домофон"}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
